/// <reference types="cypress" />

import {navigate, login, errorMessageControl, wrongPasswordMessageControl, wrongUsernameMessageControl, successLogin} from "../../page-objects/LoginPage"

describe ('yemeksepeti actions' ,() => {
    beforeEach(() => {
        navigate()
    })

    it('Successful login case', ()  => {
        successLogin()
        cy.screenshot()
    })
    
    it('Correct username and wrong password login test', ()  => {
        login('yemeksepetideneme1234@gmail.com', 'Yemeks')
        errorMessageControl('Hatalı giriş. Lütfen kullanıcı adı ve şifrenizi kontrol edip tekrar deneyiniz.')
    })
    
    it('Wrong username and correct password login test', ()  => {
        login('yemeksepetideneme1234@gmail.c', 'Yemeksepeti1234.')
        errorMessageControl('Hatalı giriş. Lütfen kullanıcı adı ve şifrenizi kontrol edip tekrar deneyiniz.')
    })

    it('Daha önce üyeliği olmayan eposta', ()  => {
        login('nurmamak@gmail.com', '123456')
        errorMessageControl('Hatalı giriş. Lütfen kullanıcı adı ve şifrenizi kontrol edip tekrar deneyiniz.')
    })

    it('Empty username and password login test', ()  => {
        login(null, null)
        wrongUsernameMessageControl('Lütfen kullanıcı adınızı/e-postanızı giriniz.')
        wrongPasswordMessageControl('Lütfen şifrenizi giriniz.')
    })
    
    it('Wrong username and empty password login test', ()  => {
        login('yemeksepetideneme1234@gmail.c', null)
        wrongPasswordMessageControl('Lütfen şifrenizi giriniz.')
    })
    
    it('Correct username and empty password login test', ()  => {
        login('yemeksepetideneme1234@gmail.com', null)
        wrongPasswordMessageControl('Lütfen şifrenizi giriniz.')
    })
    
    it('Empty username and wrong password login test', ()  => {
        login(null, 'Yemeks')
        wrongUsernameMessageControl('Lütfen kullanıcı adınızı/e-postanızı giriniz.')
    })

    it('Empty username and correct password login test', ()  => {
        login(null, 'Yemeksepeti1234.')
        wrongUsernameMessageControl('Lütfen kullanıcı adınızı/e-postanızı giriniz.')
    })
})   
