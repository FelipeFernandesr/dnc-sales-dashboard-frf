import { Theme } from "@/types";

export const lighTheme: Theme = {
    appBackground: '#FFF',
    appColor: '#000',
    appDefaultStroke: '#E0E0E0',
    appLogo: 'dnc-logo-white.svg',
    appSkeletonFrom: '#EEE',
    appSkeletonTo: '#CCC',
    buttons: {
        alert: '#E80000',
        alertColor: '#FFF',
        alertHover: '#D80000',
        disabled: '#CCC',
        disabledcolor: '#666',
        primary: '#0C70F2',
        primaryColor: '#FFF',
        primaryHover: '#0061DE',
    },
    card: {
        alert: '#E80000',
        background: '#FFF',
        border: '#E0E0E0',
        success: '#008000',
        warning: '#F7A300',
    },
    textInput: {
        active: '#FFF',
        activeColor: '#000',
        borderColor: '#E0E0E0',
        disabled: '#EEE',
        disabledBorderColor: '#E0E0E0',
        disabledColor: '#666',
        placeholderColor: '#666',
    },
    typographies: {
        error: '#FF0202',
        subtitle: '#666',
        success: '#008000',
    }
}

export const darkTheme: Theme = {
    appBackground: '#060b26',
    appColor: '#FFF',
    appDefaultStroke: '#21497d',
    appLogo: 'dnc-logo-black.svg',
    appSkeletonFrom: '#060b26',
    appSkeletonTo: '#21497d',
    buttons: {
        alert: '#E80000',
        alertColor: '#FFF',
        alertHover: '#D80000',
        disabled: '#313649',
        disabledcolor: '#6D7B8E',
        primary: '#0C70F2',
        primaryColor: '#FFF',
        primaryHover: '#0061DE',
    },
    card: {
        alert: '#E80000',
        background: '#0F1535',
        border: '#21497D',
        success: '#008000',
        warning: '#F7A300',
    },
    textInput: {
        active: '#0F1535',
        activeColor: '#FFF',
        borderColor: '#21497D',
        disabled: '#282D49',
        disabledBorderColor: '#2E3F55',
        disabledColor: '#58677C',
        placeholderColor: '#89A7CE',
    },
    typographies: {
        error: '#FF0202',
        subtitle: '#89A7CE',
        success: '#008000',
    }
}
