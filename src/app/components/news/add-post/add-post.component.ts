import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddPostService } from '../../../services/add-post/add-post.service'
import { ThanksPopupComponent } from '../../thanks-popup/thanks-popup.component';
import { ThanksPopupService } from '../../../services/thanks-popup/thanks-popup.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private addPostService: AddPostService, private thanksPopupService: ThanksPopupService) { }

  newsPostsForm = new FormGroup({
    titlePost: new FormControl(null),
    imagePost: new FormControl(null),
    textPost: new FormControl(null),
    autorPost: new FormControl(null),
  })

  ngOnInit(): void {
  }

  submitNewPost() {
    if (this.newsPostsForm.invalid) {
      this.newsPostsForm.markAllAsTouched();
    } else {

      this.addPostService.sendNewPost(this.newsPostsForm.value).subscribe({
        next: (res) => {
          // console.log('res from add post: ', res)
        }, error: (err) => {
          // console.log('err from add post: ', err)
          this.newsPostsForm.reset();
          this.thanksPopupService.openThanksPopup(ThanksPopupComponent)
        },
      });
      // console.log('post: ', this.newsPostsForm.value)
      return this.newsPostsForm.value;
    }
  }

}
