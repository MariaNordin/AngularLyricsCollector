import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SearchComponent } from "./pages/search/search.component";
import { CollectionsComponent } from "./pages/collections/collections.component";

const routes: Routes = [
    { path: '', redirectTo: '/lyrics-collector', pathMatch: 'full' },
    { path: 'lyrics-collector', component: SearchComponent },
    { path: 'collections', component: CollectionsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }