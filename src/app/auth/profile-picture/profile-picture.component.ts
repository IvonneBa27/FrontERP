import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css'],
})
export class ProfilePictureComponent implements OnInit {
  convertedImage: string = '';
  isLoading: boolean = false;
  
  constructor(
    public activeModal: NgbActiveModal,
    private _srvAuth: AuthService,
    private _srvStorage: StorageService
  ) {}

  ngOnInit(): void {}

  guardar() {
     this.isLoading = true;
    const idUser = JSON.parse(this._srvStorage.get('user_id'));

    const body = {
      id: idUser,
      img_profile: this.convertedImage,
    };
    this._srvAuth.updateImgProfile(body).subscribe((res) => {
      console.log(res);
      if( res.status == 'success'){
        this._srvAuth.setprofileImage(this.convertedImage);
        this.activeModal.close();

      }


       if (res.status == 'success') {
         this.isLoading = false;
         swal.fire('Do It Right', res.msg, 'success');
       } else {
         swal.fire('Do It Right', res.msg, 'error');
         this.isLoading = false;
       }

    });
    console.log(this.convertedImage);
  }

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.convertToBase64(file);
    }
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        this.convertedImage = reader.result as string;
      }
    };
    reader.readAsDataURL(file);
  }
}
