const Header = (title, date, temp) => {

  const header = document.createElement('div')
  const dateText = document.createElement('span')
  const titleText = document.createElement('h1')
  const tempText = document.createElement('span')

  header.classList.add('header')
  dateText.classList.add('date')
  tempText.classList.add('temp')

  header.appendChild(dateText)
  header.appendChild(titleText)
  header.appendChild(tempText)

  dateText.textContent = date;
  titleText.textContent = title;
  tempText.textContent = temp;
  

  return header;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {

  document.querySelector(`${selector}`).appendChild(Header('Daily Bugle', '5/7/21', '75°'))

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
