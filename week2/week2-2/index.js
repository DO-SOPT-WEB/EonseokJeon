const INIT_BALANCE = 0
const HISTORY_LIST = [
  {
    category: '식비',
    location: '버거킹 고양스타필드점',
    price: 10_800,
    type: '지출',
  },
  {
    category: '취미',
    location: '더클라임 강남점',
    price: 23_000,
    type: '지출',
  },
  {
    category: '월급',
    location: 'CU 고양원당점',
    price: 300_000,
    type: '수입',
  },
  {
    category: '쇼핑',
    location: '쿠팡',
    price: 4_200,
    type: '수입',
  },
]

const TOTAL_HISTORY = document.querySelector('.detail__list');

let totalBalance = INIT_BALANCE; // 굳이 왜 이렇게?
let totalIncome = 0;
let totalSpending = 0;

const TOTAL_BALANCE = document.querySelector('.total__sum__amount');
const TOTAL_INCOME = document.querySelector('.total__detail__item__plus__num');
const TOTAL_SPENDING = document.querySelector('.total__detail__item__minus__num');

const INCOME_CHECK_BOX = document.getElementById('income');
const SPENDING_CHECK_BOX = document.getElementById('spending');
// const TOTAL_HISTORY = document.querySelector('.detail__list');


const updateHistory = function updateHistoryListWithCheckBox() {
  const SHOW_INCOME = INCOME_CHECK_BOX.checked;
  const SHOW_SPENDING = SPENDING_CHECK_BOX.checked;
  
  const EACH_HISTORY = document.querySelectorAll('.detail__list__item');
  
  EACH_HISTORY.forEach((item) => {
    const type = item.querySelector('.detail__list__item__history__price').classList.contains('income')
    ? '수입'
    : '지출';
    
    if ((SHOW_INCOME && type === '수입') || (SHOW_SPENDING && type === '지출')) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

const main = () => {
  INCOME_CHECK_BOX.addEventListener('change', updateHistory);
  SPENDING_CHECK_BOX.addEventListener('change', updateHistory);
  
  HISTORY_LIST.forEach(({ category, location, price, type }) => {
    const EACH_HISTORY = document.createElement('li');
    EACH_HISTORY.classList.add('detail__list__item');
    TOTAL_HISTORY.appendChild(EACH_HISTORY);
    
    const HISTORY_CATEGORY = document.createElement('p');
    HISTORY_CATEGORY.classList.add('detail__list__item__category');
    HISTORY_CATEGORY.textContent = category;
    EACH_HISTORY.appendChild(HISTORY_CATEGORY);
    
    const HISTORY_DETAIL = document.createElement('div');
    HISTORY_DETAIL.classList.add('detail__list__item__history');
    EACH_HISTORY.appendChild(HISTORY_DETAIL);
    
    const HISTORY_LOCATION = document.createElement('p');
    HISTORY_LOCATION.classList.add('detail__list__item__history__content');
    HISTORY_LOCATION.textContent = location;
    HISTORY_DETAIL.appendChild(HISTORY_LOCATION);
    
    const HISTORY_PRICE = document.createElement('p');
    HISTORY_PRICE.classList.add('detail__list__item__history__price');
    HISTORY_DETAIL.appendChild(HISTORY_PRICE);
    
    if (type === '수입') {
      totalBalance += price;
      totalIncome += price;
      HISTORY_PRICE.textContent = price.toLocaleString('ko-KR');
      
      return HISTORY_PRICE.classList.add('income');
    }
    if (type === '지출') {
      totalBalance -= price;
      totalSpending += price;
      HISTORY_PRICE.textContent = (price * -1).toLocaleString('ko-KR');
      
      return HISTORY_PRICE.classList.add('spending');
    }
  })

  TOTAL_BALANCE.textContent = totalBalance.toLocaleString('ko-KR');
  TOTAL_INCOME.textContent = totalIncome.toLocaleString('ko-KR');
  TOTAL_SPENDING.textContent = totalSpending.toLocaleString('ko-KR');
}

main();
