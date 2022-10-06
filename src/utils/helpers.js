import axios from 'axios'
import Swal from 'sweetalert2'


// 通知提示
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000
})