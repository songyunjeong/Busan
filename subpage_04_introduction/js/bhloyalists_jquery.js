$(function() {
  // lnb_tab mouseover_event
  const header = $('.header_box');
  const logoW = $('.header_box .header .logo_w');
  const logoB = $('.header_box .header .logo_b');
  const globalP = $('.header_box .header .gnb .global label p');
  const globalI = $('.header_box .header .gnb .global label i');
  const hamI = $('.header_box .header .gnb .ham label i');
  const hamBtn = $('#ham_chk');
  const hamDimmed = $('.header .gnb .ham .dimmed');
  const lnbTab = $('.header .web_lnb .lnb_tab li');
  const lnbSheet = $('.header .web_lnb .sheet_box');

  lnbTab.mouseover(function() {
    header.addClass('header_on');
    logoW.css('display', 'none');
    logoB.css('display', 'block');
    globalP.css('color', '#585858');
    globalI.css('color', '#585858');
    hamI.css('color', '#585858');
    lnbTab.css('color', '#585858');
    lnbTab.eq($(this).index()).css('color', '#E21355');
    lnbSheet.stop().slideDown(400);
  })
  lnbTab.mouseout(function() {
    lnbTab.css('color', '#585858');
  })
  lnbSheet.mouseover(function() {
    lnbSheet.stop().slideDown(400);
  })
  lnbSheet.mouseout(function() {
    lnbSheet.stop().slideUp(400);
  })


  // ham click_event
  hamBtn.click(function() {
    if(hamBtn.is(':checked')) {
      hamI.css('color', '#585858');
      hamDimmed.css('display', 'block');
    } else {
      hamI.css('color', '#FFF');
      hamDimmed.css('display', 'none');
    }
  })


  // ham_tab click_event
  const tab = $('.menu_box .tabsheet .tab > li');
  const sheet = $('.menu_box .tabsheet .sheet_lnb > ul');

  tab.click(function() {
    let target = $(this);
    let i = target.index();

    tab.removeClass('tab_on');
    tab.eq(i).addClass('tab_on');

    sheet.removeClass('sheet_on');
    sheet.eq(i).addClass('sheet_on');
  })

  
  // aside_tab click_event
  for(let i=1; i<=9; i++) {
    let asideTab = $('#lv3_aside' + i);
    let asideSheet = $('.aside_sheet' + i);

    asideTab.click(function() {
      if(asideTab.is(':checked')) {
        asideSheet.slideDown(400);
      } else {
        asideSheet.slideUp(400);
      }
    })
  }  
  

  // footer01_chk click_event
  const footerBtn = $('.footer .footer01 > input');

  footerBtn.click(function() {
    let target = $(this);
    let i = target.index();

    if(footerBtn.is(':checked')) {
      $('input:checkbox[id="site01_chk"]').prop('checked', false);
      $('input:checkbox[id="site02_chk"]').prop('checked', false);

      footerBtn.eq(i).prop('checked', true);
    }
  })
  

  // window scroll_event (top_btn)
  const topBtn = $('.top_btn_box');

  $(window).scroll(function() {
    if($(this).scrollTop() > 500) {
      topBtn.css('opacity', '1');
    } else {
      topBtn.css('opacity', '0');
    }
  })


  // top_btn click_event
  topBtn.click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 300);
  })
})