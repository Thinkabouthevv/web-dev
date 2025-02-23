import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  images: string[]; 
  name: string;
  description: string;
  rating: number;
  link: string;
  currentImageIndex: number; 
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  products: Product[] = [
    {
      id: 1,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p08/pc5/17680143.jpg?format=gallery-medium'
      ],
      name: 'Наушники Marshall Major IV черный',
      description: 'Bluetooth гарнитура MARSHALL Major IV подарит комфортное прослушивание музыки.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/',
      currentImageIndex: 0
    },
    {
      id: 2,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-large'
      ],
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский iPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/',
      currentImageIndex: 0
    },
    {
      id: 3,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/h15/84957845585950.jpg?format=gallery-large'
      ],
      name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/',
      currentImageIndex: 0
    },
    {
      id: 4,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h38/h9c/83155236683806.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/hc1/83155233407006.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h64/h70/83155233800222.jpg?format=gallery-large'
      ],
      name: 'Sony WH-1000XM5',
      description: 'Флагманские наушники с активным шумоподавлением и длительным временем работы.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sony-wf-1000xm5-chernyi-112854077/',
      currentImageIndex: 0
    },
    {
      id: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-large'
      ],
      name: 'Apple AirPods Pro (2nd Gen)',
      description: 'Наушники с передовым шумоподавлением и пространственным звуком.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/',
      currentImageIndex: 0
    },
    {
      id: 6,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h7c/64217926172702.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/hb5/64363675615262.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/h59/65946406486046.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/hfb/70021271388190.jpg?format=gallery-large'
      ],
      name: 'JBL Tune 760NC',
      description: 'Беспроводные наушники с активным шумоподавлением и мощными басами.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/jbl-tune-760nc-bezhevyi-108114684/?c=750000000',
      currentImageIndex: 0
    },
    {
      id: 7,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h74/h15/63762645286942.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h67/hd7/63762645745694.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h24/hf6/63762646138910.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/hb9/63762646663198.jpg?format=gallery-large'
      ],
      name: 'Beats Studio3 Wireless',
      description: 'Премиальные наушники от Beats с шумоподавлением и глубокими басами.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/beats-studio-3-wireless-shadow-seryi-4803515/?c=750000000',
      currentImageIndex: 0
    },
    {
      id: 8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h33/hb1/63770833649694.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h48/63770834305054.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h56/63770834960414.jpg?format=gallery-large'
      ],
      name: 'HyperX Cloud II',
      description: 'Геймерская гарнитура с объемным звуком и микрофоном с шумоподавлением.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/hyperx-cloud-ii-cherno-krasnyi-4800107/?c=750000000',
      currentImageIndex: 0
    },
    {
      id: 9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h2d/86887758069790.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/hbc/86887758135326.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h3d/86887758200862.jpg?format=gallery-large'
      ],
      name: 'Умная колонка Яндекс Станция Лайт 2',
      description: 'Яндекс Станция – это умная колонка с голосовым помощником Алисой',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
      currentImageIndex: 0
    },
    {
      id: 10,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/h7a/64374651715614.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h40/h36/64374654369822.jpg?format=gallery-large'
      ],
      name: 'Bose QuietComfort 45',
      description: 'Наушники с передовым шумоподавлением и кристально чистым звуком.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-chernyi-102978612/?c=750000000',
      currentImageIndex: 0
    }
  ];

  constructor() {}

  prevImage(product: Product): void {
    product.currentImageIndex =
      (product.currentImageIndex - 1 + product.images.length) % product.images.length;
  }

  nextImage(product: Product): void {
    product.currentImageIndex = (product.currentImageIndex + 1) % product.images.length;
  }


  getRating(rating: number): string {
    return `Рейтинг: ${rating} ⭐`;
  }

  shareWhatsApp(product: Product): void {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
  
  shareTelegram(product: Product): void {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  }  
}