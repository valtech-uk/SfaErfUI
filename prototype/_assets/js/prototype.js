$(function() {
// ------------ Mockup script ------------ //


//-- Banner sign in

  $('#btnSignIn').on('click', function() {
    $.cookie('signedIn', true, {path: '/'});
  });

  $('#btnSignOut, #btnDeleteAccount').on('click', function() {
    $.removeCookie('signedIn', { path: '/' });
  });

  if($.cookie('signedIn')) {
    $('#bannerSignedOut').hide();
    $('#bannerSignedIn').show();
    $('.details-apply').show();
    $('.details-signIn').hide();
    $('#beforeApply').hide();
  } else {
    $('#bannerSignedOut').show();
    $('#bannerSignedIn').hide();
    $('.details-apply').hide();
    $('.details-signIn').show();
  }

  $("#Password").keyup(function () {
        initializeStrengthMeter();
    });

    function initializeStrengthMeter() {
        $("#pass_meter").pwStrengthManager({
            password: $("#Password").val(),
            minChars: 8
        });
    }

    $('.pw-masktoggle').on("click", function () {
        changePassType();
        toggleShowHide();

        return false;
    });

    function changePassType() {
        var password = document.getElementById('Password');
        if (password.type == 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    }

    function toggleShowHide() {
        var showOrHide = $('.pw-masktoggle').text();
        if (showOrHide == 'Show') {
            $('.pw-masktoggle').text('Hide');
        } else {
            $('.pw-masktoggle').text('Show');
        }
    }

  //---- Unsubscribe

  $('#emailToggle').on('click', function() {
    $(this).closest('.display-table').find('.email-input').click();

    $(this).blur();

    return false;
  });

  $('#textToggle').on('click', function() {
    $(this).closest('.display-table').find('.text-input').click();

    $(this).blur();

    return false;
  });

  //---- Send email address

  $('#sendEmailAddress').on('click', function() {
    $('#emailAddressSent').show();
  });

  //----

  $('.print-trigger').on('click', function(e) {
    window.print();

    e.preventDefault();
  });



// --------------- Remove for live code -------------- //
});