import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
}

