import { Component, inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-write-blogs',
  templateUrl: './write-blogs.component.html',
  styleUrls: ['./write-blogs.component.scss']
})
export class WriteBlogsComponent {
  public tags = [
    'web', 'frontend', 'backend', 'fullstack', 'html5', 'css3', 'JavaScript', 'typeScript', 'react', 'angular', 'vue', 'node', 'nestjs', 'java', 'python', 'c', 'c++'
  ];
  public isLoading: boolean = false;

  constructor(private _blogService: BlogService, public _sharedService: SharedService) { }

  ngOnInit() { }

  blogForm = new FormGroup({
    title: new FormControl(''),
    details: new FormControl(''),
    tags: new FormControl(''),
  })

  public createBlog() {
    const blogForm = this.blogForm.value;
    const blogData = {
      title: blogForm.title,
      details: blogForm.details,
      tags: blogForm.tags,
    }

    this.isLoading = true;
    this._blogService.createBlog(blogData).subscribe(res => {
      // console.log(res)
      this.isLoading = false;
      Swal.fire({
        icon: 'success',
        title: 'Blog updated successfully!'
      })
    }, (err) => {
      this.isLoading = false;
    })
  }
}
