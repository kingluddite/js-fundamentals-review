var $password = $( "#password" ),
  $confirmPassword = $( "#confirm-password" ),
  $username = $( "#username" );
// Hide hints
$( "form span" ).hide();

function validPwdLength() {
  // determine if pwd valid
  if ( $password.val().length > 8 ) {
    // hide if valid
    $password.next().hide();
  } else {
    // else show hint
    $password.next().show();
  }
}

function confirmPassword() {
  if ( $password.val() === $confirmPassword.val() ) {
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  }
}
$password.focus( validPwdLength )
  .keyup( validPwdLength )
  .focus( confirmPassword )
  .keyup( confirmPassword );

$confirmPassword.focus( confirmPassword ).keyup( confirmPassword );
