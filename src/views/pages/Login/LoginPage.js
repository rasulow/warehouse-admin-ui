import Swal from "sweetalert2"
import axios from "axios";

export default {
    data: () => ({
        show1: false,
        password: '',
        username: '',
        usernameRules: [
            v => !!v || 'Username is required',
            v => v.length <= 10 || 'Username must be less than 10 characters',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length <= 10 || 'Password must be less than 10 characters',
        ],
        Toast: Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
    }),
    created() {
      this.deleteToken();
    },
    methods: {
      
      async deleteToken() {
        localStorage.removeItem('token')
      },
      async login() {
        const formData = new FormData()
          formData.append('username', this.username)
          formData.append('password', this.password)
          axios.post('/auth/token/', formData,
              {
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                  }
              })
              .then((res) => {
                  if (res.data.role === 'admin') {
                      localStorage.setItem('token', res.data.access_token)
                      this.Toast.fire({
                          icon: 'success',
                          title: 'Signed in successfully'
                      })
                      this.$router.push('/dashboard')
                  } else {
                      this.username = ''
                      this.password = ''
                      this.Toast.fire({
                          icon: 'error',
                          title: 'You aren\'t admin'
                      })
                  }
              })
              .catch((err) => {
                  console.log(err)
                  this.username = ''
                  this.password = ''
                  this.Toast.fire({
                      icon: 'error',
                      title: 'Something went wrong!'
                  })
              })
      }
    }
  }