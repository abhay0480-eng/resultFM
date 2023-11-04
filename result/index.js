
const reactionTab = document.getElementById('reaction')
const result = document.getElementById('result')

const arr = []

let sum = 0;

fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
        console.log(item);
        const tabsEl = document.createElement("div");
     tabsEl.classList.add(`${item.bgColor}`, "grid", "grid-cols-3" , "p-3" ,"rounded" , "my-3","justify-items-center", "content-center")
      const categoryEl = document.createElement("div");
      categoryEl.textContent = item.category;
      const imageEl = document.createElement("img");
      imageEl.src = item.icon
      imageEl.classList.add("w-4", "h-4")
      const scoreEl = document.createElement("div");
      arr.push(item.score)
      scoreEl.textContent = `${item.score}/100`
      tabsEl.appendChild(imageEl);
      tabsEl.appendChild(categoryEl);
      tabsEl.appendChild(scoreEl);
      reactionTab.appendChild(tabsEl)
    });
    const sumEl = document.createElement("h1");
    const textEl = document.createElement("p");
    sumEl.classList.add("text-[60px]")
  
    arr.forEach( num => {
      sum += num;
    })

    console.log("sum",sum);
    sumEl.textContent = (sum/500) * 100
    textEl.textContent = "of 100"

    result.appendChild(sumEl)
    result.appendChild(textEl)


  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


  