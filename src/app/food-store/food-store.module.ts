import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FoodStoreService } from './food-store.service';
import { FoodStoreConfig, FOOD_STORE_CONFIG } from './config';

export const FOOD_PROVIDERS: Provider[] = [
    FoodStoreService
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class FoodStoreModule {
    static forRoot(config: FoodStoreConfig): ModuleWithProviders<any> {
        return {
            ngModule: FoodStoreModule,
            providers: [
                FOOD_PROVIDERS,
                {
                    provide: FOOD_STORE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
