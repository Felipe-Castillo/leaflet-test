import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ElementService } from '../../services/element.service';
import { ElementInfo } from '../../models/ElementInfo';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {


  public element_info: ElementInfo;
  public updateFromInput: boolean = false;
  public dump_arr: Array<any> = [];

  public options: Array<any> = [
    { value: "tipo_lampara", text: "Tipo Lampara" },
    { value: "tipo_luminaria", text: "Tipo Luminaria" },
    { value: "tipo_soporte", text: "Tipo Soporte" },

  ];

  public Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts

  private optFromInputString: object =
    {
      "title": { "text": "" },
      "series": [{
        "data": [],
        "type": "pie",
      }],
      "credits": {
        "enabled": false
      },
    };

  public optFromInput: Highcharts.Options = this.optFromInputString;

  constructor(
    private _element_service: ElementService,

  ) { }

  public updateInputChart() {
    this.optFromInput = {
      "title": { "text": "" },
      "series": [{
        "data": this.dump_arr,
        "type": "pie",
      }],
      "credits": {
        "enabled": false
      },
    };
  }




  ngOnInit(): void {
  }

  public show_grahpic(e: any): void {
    let data = this.getLayers().then(layers => {

      this.dump_arr = this.calculate_graphic_values(layers, e.target.value);

      this.updateInputChart();
    });


  }

  private calculate_graphic_values(layers: any, property: any): Array<object> {
    let arr = layers.features.map((o: any) => o.properties[property]);

    let uniq_arr = [...new Set(arr)].filter(n => n);

    let response: Array<any> = [];

    for (const i in uniq_arr) {

      let data = [];
      let val = arr.filter((o: any) => {
        return o == uniq_arr[i];
      }).length;

      data.push(uniq_arr[i]);
      data.push(val);

      response.push(data);
    }


    return response;
  }

  private async getLayers(): Promise<any> {
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();
    return luminaires;
  }

}
