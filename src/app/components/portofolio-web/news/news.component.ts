import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SwiperContainer } from 'swiper/element';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {
  @ViewChild('newsSwiper') swiper!: ElementRef<SwiperContainer>

  listNews = [
    {
      title: 'Contoh1',
      tag: 'berita1',
      author: 'Mahpudin',
      datePost: new Date('2023-10-10'),
      image: 'assets/images/news-1.jpg',
    },
    {
      title: 'Contoh2',
      tag: 'berita2',
      author: 'Mahpudin',
      datePost: new Date('2023-10-10'),
      image: 'assets/images/news-2.jpg',
    },
    {
      title: 'Contoh3',
      tag: 'berita3',
      author: 'Mahpudin',
      datePost: new Date('2023-10-10'),
      image: 'assets/images/news-3.jpg',
    },
  ]

  onNext() {
    this.swiper.nativeElement.swiper.slideNext()
  }
  onPrev() {
    this.swiper.nativeElement.swiper.slidePrev()
  }
}
