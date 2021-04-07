import Swal from "sweetalert2";
 class HelperService {

    ErrorMessage = (errorMessage) => {
        Swal.fire({
          icon: "error",
          title: "",
          text: errorMessage,
          confirmButtonText: "OK",
        });
      };

}
export default new HelperService()