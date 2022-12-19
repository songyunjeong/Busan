document.querySelector('.comment_btn').addEventListener('click', () => {
  let newComment = document.querySelector('.comment')
  let userComment = document.createTextNode(newComment.value)

  if(userComment.length > 0) {
    let commentLi = document.querySelector('.comment_user')
    let newDivBox = document.createElement('div')
    let newDivImg = document.createElement('div')
    let newDivTxt = document.createElement('div')
    let newDivTxtName = document.createElement('div')
    let newDivTxtDate = document.createElement('div')
    let newDivTxtCommentTxt = document.createElement('div')
    let newDivLike = document.createElement('div')

    commentLi.insertBefore(newDivBox, commentLi.childNodes[0])
    newDivBox.appendChild(newDivImg)
    newDivBox.appendChild(newDivTxt)
    newDivBox.appendChild(newDivLike)
    
    newDivImg.setAttribute('class', 'img')
    newDivImg.textContent = 'user'
    newDivTxt.setAttribute('class', 'txt')
    newDivTxt.appendChild(newDivTxtName)
    newDivTxt.appendChild(newDivTxtDate)
    newDivTxt.appendChild(newDivTxtCommentTxt)
    newDivTxtName.setAttribute('class', 'name')
    newDivTxtName.textContent = 'user'
    newDivTxtDate.setAttribute('class', 'date')
    newDivTxtDate.textContent = '2022.12.19 23:06'
    newDivTxtCommentTxt.setAttribute('class', 'comment_txt')
    newDivTxtCommentTxt.appendChild(userComment)
    newDivLike.setAttribute('class', 'like')

    newComment.value = ''
  } else {
    alert('댓글을 입력해 주세요.')
  }
})