import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./components/register/register.component";
import { SuccessComponent } from "./components/success/success.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        AppComponent
    ],
    providers: [],
})
export class AppModule{}