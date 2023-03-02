import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  /** 
   * selector	    コンポーネントのCSS要素セレクター 
   * templateUrl	コンポーネントのテンプレートファイルの場所
   * styleUrls	  コンポーネントのプライベートCSSスタイルの場所
  */
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/**heroはオブジェクト */
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}