
import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessageDisplayService {
  constructor( private toastrService: ToastrService) {}

  successMessage(message: string): void {
    this.toastrService.success(message, '', {
      easing:'ease-in',
      easeTime: 300,
      progressBar:true,
      progressAnimation : 'increasing'
    });
    
  }

  failureMessage(error: string): void {
    this.toastrService.error(error, 'Error', {
      easing:'ease-in',
      easeTime: 300,
      progressBar:true,
      progressAnimation : 'increasing'
    });
  }

  warningMessage(message: string, heading: string): void {
    this.toastrService.warning(message, heading, {
      disableTimeOut: true,
      enableHtml: true
    });
  }

  warningMessageWithTimeout(message: string, heading: string): void {
    this.toastrService.warning(message, heading, {
      easing:'ease-in',
      easeTime: 300,
      progressBar:true,
      progressAnimation : 'increasing'
    });
  }

}
