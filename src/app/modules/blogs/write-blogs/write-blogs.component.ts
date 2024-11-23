import { Component, inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ActivatedRoute } from '@angular/router';

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
  public blogId: any;

  constructor(private _blogService: BlogService, public _sharedService: SharedService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.blogId = this.actRoute.snapshot?.params['blogId'];

    if (this.blogId) {
      this.getBlogDetails();
    }
  }

  private getBlogDetails() {
    this._blogService.getBlogDetail(this.blogId).subscribe(res => {
      this.patchBlogForm(res);
    })
  }

  private patchBlogForm(info) {
    this.blogForm.patchValue({
      title: info.title,
      details: info.details,
      tags: info.tags
    })
  }

  blogForm = new FormGroup({
    title: new FormControl(''),
    details: new FormControl(''),
    tags: new FormControl(''),
  })

  public saveBlog() {
    const blogForm = this.blogForm.value;
    const blogData = {
      title: blogForm.title,
      details: blogForm.details,
      tags: blogForm.tags,
    }

    if (this.blogId) {
      this.isLoading = true;
      this._blogService.updateBlog(this.blogId, blogData).subscribe(res => {
        // console.log(res)
        this.isLoading = false;
        Swal.fire({
          icon: 'success',
          title: 'Blog updated successfully!'
        })
      }, (err) => {
        this.isLoading = false;
      })
    } else {
      this.isLoading = true;
      this._blogService.createBlog(blogData).subscribe(res => {
        // console.log(res)
        this.isLoading = false;
        this.blogForm.reset();
        Swal.fire({
          icon: 'success',
          title: 'Blog created successfully!'
        })
      }, (err) => {
        this.isLoading = false;
      })
    }
  }
}
