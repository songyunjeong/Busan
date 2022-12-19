$(function() {
  // window scroll_event(header)
  const header = $('.header_box');
  const logoW = $('.header_box .header .logo_w');
  const logoB = $('.header_box .header .logo_b');
  const globalP = $('.header_box .header .gnb .global label p');
  const globalI = $('.header_box .header .gnb .global label i');
  const webGlobal = $('.header_box .header .web_gnb li');
  const webGlobalP = $('.header_box .header .web_gnb .global label p');
  const webGlobalI = $('.header_box .header .web_gnb .global label i');
  const hamI = $('.header_box .header .gnb .ham label i');
  const hamBtn = $('#ham_chk');
  const hamDimmed = $('.header .gnb .ham .dimmed');
  const lnbTab = $('.header .web_lnb .lnb_tab li');
  const lnbSheet = $('.header .web_lnb .sheet_box');

  $(window).scroll(function() {
    if($(this).scrollTop()) {
      header.addClass('header_on');
      logoW.css('display', 'none');
      logoB.css('display', 'block');
      globalP.css('color', '#585858');
      globalI.css('color', '#585858');
      webGlobal.css('color', '#585858');
      webGlobalP.css('color', '#585858');
      webGlobalI.css('color', '#585858');
      hamI.css('color', '#585858');
      lnbTab.css('color', '#585858');
    } else {
      header.removeClass('header_on');
      logoW.css('display', 'block');
      logoB.css('display', 'none');
      globalP.css('color', '#FFF');
      globalI.css('color', '#FFF');
      webGlobal.css('color', '#FFF');
      webGlobalP.css('color', '#FFF');
      webGlobalI.css('color', '#FFF');
      hamI.css('color', '#FFF');
      lnbTab.css('color', '#FFF');
    }
  })


  // window scroll_event(page_scroll_bar)
  $(window).scroll(function() {
    if($(this).scrollTop() == $('.visual_main').offset().top) {
      $('.pointer').css('top', '0');
    } else if($(this).scrollTop() <= $('.guide').offset().top) {
      $('.pointer').css('top', '20px');
    } else if($(this).scrollTop() <= $('.inform').offset().top) {
      $('.pointer').css('top', '48px');
    } else if($(this).scrollTop() <= $('.communication').offset().top) {
      $('.pointer').css('top', '73px');
    } else if($(this).scrollTop() <= $('.web_performance').offset().top) {
      $('.pointer').css('top', '98px');
    } else if($(this).scrollTop() <= $('.web_exhibition').offset().top) {
      $('.pointer').css('top', '98px');
    } else if($(this).scrollTop() <= $('.banner').offset().top) {
      $('.pointer').css('top', '125px');
    }
  }) 


  // lnb_tab mouseover_event
  lnbTab.mouseover(function() {
    header.addClass('header_on');
    logoW.css('display', 'none');
    logoB.css('display', 'block');
    globalP.css('color', '#585858');
    globalI.css('color', '#585858');
    webGlobal.css('color', '#585858');
    webGlobalP.css('color', '#585858');
    webGlobalI.css('color', '#585858');
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
      header.addClass('header_on');
      logoW.css('display', 'none');
      logoB.css('display', 'block');
      globalP.css('color', '#585858');
      globalI.css('color', '#585858');
      hamI.css('color', '#585858');
      hamDimmed.css('display', 'block');
    } else {
      header.removeClass('header_on');
      logoW.css('display', 'block');
      logoB.css('display', 'none');
      globalP.css('color', '#FFF');
      globalI.css('color', '#FFF');
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


  // search_btn click_event
  const searchBtn = $('#search_chk');

  searchBtn.click(function() {
    if(searchBtn.is(':checked')) {
      $('.search_dimmed').css('display', 'block');
      $('.search_page').css('display', 'block');
    } else {
      $('.search_dimmed').css('display', 'none');
      $('.search_page').css('display', 'none');
    }
  })


  // guide_tab click_event
  const guiTab = $('.guide .guide_metaphor > input');
  const guiLabel = $('.guide .guide_metaphor .guide_tab > li label');
  const guiSheet = $('.guide .guide_metaphor > div');

  guiTab.click(function() {
    let target = $(this);
    let i = target.index();

    if(guiTab.is(':checked')) {
      $('input:checkbox[id="gui_chk01"]').prop('checked', false);
      $('input:checkbox[id="gui_chk02"]').prop('checked', false);
      $('input:checkbox[id="gui_chk03"]').prop('checked', false);

      guiTab.eq(i).prop('checked', true);

      guiLabel.removeClass('gui_label_on');
      guiLabel.eq(i).addClass('gui_label_on');

      guiSheet.slideUp(400);
      guiSheet.eq(i).stop().slideDown(400);
    } else {
      guiLabel.removeClass('gui_label_on');
      guiSheet.stop().slideUp(400);
    }
  })


  // guide_box mouseover_event
  const guideBox = $('.guide .guide_box > div > div');
  const guideBoxL = $('.guide .guide_box .left > div');
  const guideBoxR = $('.guide .guide_box .right > div');

  guideBoxL.mouseover(function() {
    guideBoxL.eq($(this).index()).addClass('guide_on');
  })
  guideBoxR.mouseover(function() {
    guideBoxR.eq($(this).index()).addClass('guide_on');
  })

  guideBox.mouseout(function() {
    guideBox.removeClass('guide_on');
  })


  // guide_link_button mouseover_event
  const guideBxBtn = $('.guide .guide_box > div > div > ul > li');
  const guideBx1Btn = $('.guide .guide_box .guide_bx01 > ul > li');
  const guideBx1BtnImg = $('.guide .guide_box .guide_bx01 > ul > li img');
  const guideBx3Btn = $('.guide .guide_box .guide_bx03 > ul > li');
  const guideBx3BtnImg = $('.guide .guide_box .guide_bx03 > ul > li img');

  guideBx1Btn.mouseover(function() {
    guideBx1Btn.eq($(this).index()).addClass('guide_link_on');
    guideBx1BtnImg.eq($(this).index()).addClass('guide_link_on_img');
  })
  guideBx3Btn.mouseover(function() {
    guideBx3Btn.eq($(this).index()).addClass('guide_link_on');
    guideBx3BtnImg.eq($(this).index()).addClass('guide_link_on_img');
  })

  guideBxBtn.mouseout(function() {
    guideBxBtn.removeClass('guide_link_on');
    guideBx1BtnImg.removeClass('guide_link_on_img');
    guideBx3BtnImg.removeClass('guide_link_on_img');
  })


  // communication_tab mouseover_event
  const commTab = $('.communication .communication_m > ul > li');
  const commTabImg = $('.communication .communication_m > ul > li img');  
  const commTabImgBugi = $('.communication .communication_m > ul > li .bugi');  
  const commTabP = $('.communication .communication_m > ul > li p');

  commTab.mouseover(function() {
    let target = $(this);
    let i = target.index();

    commTab.eq(i).addClass('comm_tab_on');
    commTabImg.eq(i).addClass('comm_tab_img_on');
    commTabImgBugi.removeClass('comm_tab_img_on');
    commTabP.eq(i).addClass('comm_tab_p_on');
  })
  commTab.mouseout(function() {
    commTab.removeClass('comm_tab_on');
    commTabImg.removeClass('comm_tab_img_on');
    commTabP.removeClass('comm_tab_p_on');
  })


  // small_poster click_event(txt)
  const performanceGenreAll = $('.web_performance .genre p');
  const performanceTitleAll = $('.web_performance .title ul');

  for(let i=1; i<=9; i++) {
    let performancePoster = $('.pfpo' + i);
    let performanceGenre = $('.pfgr' + i);
    let performanceTitle = $('.pfti' + i);
    
    performancePoster.click(function() {
      performanceGenreAll.css('display', 'none');
      performanceGenre.css('display', 'block');

      performanceTitleAll.css('display', 'none');
      performanceTitle.css('display', 'block');
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


  // window scroll_event(top_btn)
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