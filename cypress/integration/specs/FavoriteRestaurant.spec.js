/// <reference types="cypress" />

import { checkFavoriteRestaurantInList } from "../../page-objects/FavoritePage"
import {navigateFavoritePage, selectRegionByValue } from "../../page-objects/HomePage"
import {navigate, login, closeCookie, successLogin } from "../../page-objects/LoginPage"
import { selectRandomRestaurant } from "../../page-objects/RestaurantListPage"
import { addFavoriteSelectedRestaurant } from "../../page-objects/RestaurantPage"

describe ('favorite' ,() => {

    it('Add Favorite Restaurant', ()  => {
        navigate()
        successLogin()
        selectRegionByValue('Şişli (Esentepe Mah.)')
        selectRandomRestaurant()
        addFavoriteSelectedRestaurant()
        navigateFavoritePage()
        checkFavoriteRestaurantInList()
        
    })

})


