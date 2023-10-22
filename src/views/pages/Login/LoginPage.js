import Swal from "sweetalert2"

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
        this.$router.push('/dashboard')
        this.Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
      }
    }
  }