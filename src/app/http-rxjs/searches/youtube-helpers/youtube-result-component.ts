import {Component} from "@angular/core";
import {SearchResult} from "./youtube-result-class";


@Component({
  selector: 'youtube-result-component',
  inputs: ['result'],
  template: `
        <div>
          <div class="thumbnail">
            <img src="{{result.thumbnailUrl}}" style="width:200px">
            <div class="caption">
              <h3>{{result.title}}</h3>
              <p>{{result.description}}</p>
              <p><a href="{{result.videoUrl}}"
                    target="_blank"
                    class="btn btn-default" role="button">Watch</a></p>
            </div>
          </div>
        </div>
    `
})
export class YoutubeResultComponent {
  result: SearchResult;
}
