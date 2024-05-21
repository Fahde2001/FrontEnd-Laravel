import { Route, Router } from '@angular/router';
import { BackEndApiService } from './../../API/BackEndApi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-supply-chain',
  templateUrl: './supply-chain.component.html',
  styleUrl: './supply-chain.component.scss'
})
export class SupplyChainComponent {

  constructor(private Api:BackEndApiService,private route:Router){}

  ngOnInit(): void {
    this.ListSupplyChian();
  }

  showDetails(item: any) {
    item.showDetailsButton = !item.showDetailsButton;
  }
  //variable
  supplyChianData:any;
  supplyChineName:string;

  //call API to get all supply chaine
  ListSupplyChian(){
    this.Api.ListSupplyChain().subscribe(
      Response=>{
        this.supplyChianData=Response;
        //console.log(JSON.stringify(Response));
      },error=>{
        console.log(error);
      }
    );
  }

  //call Api To add new supply chain
  addSupplyChine(){
    this.Api.AddSupplyChian(this.supplyChineName).subscribe(
      Response=>{
       // console.log(Response);
        this.ListSupplyChian();
      },error=>{
        console.log(error);
      }
    )
  }

  //call Api to update Supplychine
  updateSupllyChine(id,name){
    console.log(id,name);
      this.Api.UpdateSupllyChine(id,name).subscribe(
      Response=>{
        console.log(JSON.stringify(Response));
      },error=>{
        console.log(JSON.stringify(error));
      }
    )
  }

  //call api to delete SupplyChine
  deleteSupplyChine(id:any){
    console.log(id);
    this.Api.deleteSupllyChine(id).subscribe(
      Response=>{
        this.ListSupplyChian();
        console.log(JSON.stringify(Response));
      },error=>{
        console.log(JSON.stringify(error));
      }
    )
  }

  //select supply Chine
  selctSupplyChiane(id:any,name:any){
    localStorage.setItem('SupplyChianeId',id);
    localStorage.setItem('SupplyChianeName',name);
    this.route.navigate(['/student']);
  }
  

}
