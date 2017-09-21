function letMeIn() {
    
    /* Removes modal dialog that asks you to sign up */
    document.getElementsByClassName("modal_signup_dialog")[0].parentNode.removeChild(document.getElementsByClassName("modal_signup_dialog")[0]);
    
    /* Removes logged_out class so that you seem to be logged in! */
    document.getElementsByClassName("logged_out")[0].classList.remove("logged_out");
    
    /* Removes dark background that appears with modal */
    document.getElementsByClassName("modal_signup_background")[0].classList.remove("modal_signup_background");
    
    /* Removes class that prevents you from scroll - let me free! let me scroll! */
    document.getElementsByClassName("signup_wall_prevent_scroll")[0].classList.remove("signup_wall_prevent_scroll");
    
    return;
}


/* Invoke the function that will do the necessary work to let you in! */  
letMeIn(); 