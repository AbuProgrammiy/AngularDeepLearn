import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements OnInit {
  cars!: Car[];
  carDTO: CarDTO = {
    name: "",
    brand: "",
    price: 0
  };
  car: Car = {
    id: 0,
    name: "",
    brand: "",
    price: 0
  };
  id: number = 0;

  studentsList: any;

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.httpClient.get("https://car.more-info.uz:400/api/Car/Get").subscribe({
      next: (data: any) => {
        console.log(data);
        this.cars = data.response as Car[];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  post() {
    this.httpClient.post("https://car.more-info.uz:400/api/Car/Create", this.carDTO).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.isSuccess) {
          this.showToast("success", "Success", response.response);
        }
        else {
          this.showToast("warn", "Warning", response.response);
        }
      },
      error: (err) => {
        console.log(err);
        this.showToast("danger", "Error", "something went wrong!");
      }
    });
  }

  put() {
    this.httpClient.put("https://car.more-info.uz:400/api/Car/Update", this.carDTO).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.isSuccess) {
          this.showToast("success", "Success", response.response);
        }
        else {
          this.showToast("warn", "Warning", response.response);
        }
      },
      error: (err) => {
        console.log(err);
        this.showToast("danger", "Error", "something went wrong!");
      }
    });
  }

  delete() {
    const queryParams = new HttpParams().set("id", this.id);
    // ^^^ -> query berish

    this.httpClient.delete("https://car.more-info.uz:400/api/Car/Delete", { params: queryParams }).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.isSuccess) {
          this.showToast("success", "Success", response.response);
        }
        else {
          this.showToast("warn", "Warning", response.response);
        }
      },
      error: (err) => {
        console.log(err);
        this.showToast("danger", "Error", "something went wrong!");
      }
    });
  }

  requestToAuthAPI() {
    this.httpClient.get("https://authapi.more-info.uz:787/api/Menu/StudentsList").subscribe({
      next: (response: any) => {
        console.log(response);
        this.studentsList = response;
      },
      error: (err) => {
        console.log(err);
        this.showToast("danger", "Error", JSON.stringify(err));
      }
    });
  }

  showToast(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
  }
}

type Car = {
  id: number,
  name: string,
  brand: string,
  price: number;
};

type CarDTO = {
  name: string,
  brand: string,
  price: number;
};