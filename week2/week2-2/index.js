const INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    category: "식비",
    location: "버거킹 고양스타필드점",
    price: 10_800,
    type: "지출",
  },
  {
    category: "취미",
    location: "더클라임 강남점",
    price: 23_000,
    type: "지출",
  },
  {
    category: "월급",
    location: "CU 고양원당점",
    price: 300_000,
    type: "수입",
  },
  {
    category: "쇼핑",
    location: "쿠팡",
    price: 4_200,
    type: "수입",
  },
];

const totalHistory = document.querySelector(".detail__list");

const totalBalance = document.querySelector(".total__sum__amount");
const totalIncome = document.querySelector(".total__detail__item__plus__num");
const totalSpending = document.querySelector(
  ".total__detail__item__minus__num"
);
const addButton = document.querySelector(".footer__btn");

const incomeCheckBox = document.getElementById("income");
const spendingCheckBox = document.getElementById("spending");
const closeButton = document.getElementById("close-modal");
const incomeRadio = document.getElementById("add-income");
const spendingRadio = document.getElementById("add-spending");
const incomeSelect = document.getElementById("select-income");
const spendingSelect = document.getElementById("select-spending");
const saveInfoButton = document.getElementById("save-info");

const modal = document.querySelector(".modal");
const modalYes = document.querySelector(".modal__yes");
const modalNo = document.querySelector(".modal__no");

const backdrop = document.querySelector(".backdrop");

let totalBalanceAmount = INIT_BALANCE; // 굳이 왜 이렇게?
let totalIncomeAmount = 0;
let totalSpendingAmount = 0;

const updateHistory = function updateHistoryListWithCheckBox() {
  const showIncome = incomeCheckBox.checked;
  const showSpending = spendingCheckBox.checked;

  const eachHistory = document.querySelectorAll(".detail__list__item");

  eachHistory.forEach((item) => {
    const selectedType = item
      .querySelector(".detail__list__item__history__price")
      .classList.contains("income")
      ? "수입"
      : "지출";

    if (
      (showIncome && selectedType === "수입") ||
      (showSpending && selectedType === "지출")
    ) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

const useIncomeSelect = function updateSelectByType() {
  incomeSelect.classList.add("add-list__input__selected");
  spendingSelect.classList.remove("add-list__input__selected");
};

const useSpendingSelect = function updateSelectByType() {
  incomeSelect.classList.remove("add-list__input__selected");
  spendingSelect.classList.add("add-list__input__selected");
};

const showList = function showListToScreen(category, location, price, type) {
  const eachHistory = document.createElement("li");
  const historyCategory = document.createElement("p");
  const historyDetail = document.createElement("div");
  const historyLocation = document.createElement("p");
  const historyPrice = document.createElement("p");
  const historyDelete = document.createElement("button");

  eachHistory.classList.add("detail__list__item");
  totalHistory.appendChild(eachHistory);

  historyCategory.classList.add("detail__list__item__category");
  historyCategory.textContent = category;
  eachHistory.appendChild(historyCategory);

  historyDetail.classList.add("detail__list__item__history");
  eachHistory.appendChild(historyDetail);

  historyLocation.classList.add("detail__list__item__history__content");
  historyLocation.textContent = location;
  historyDetail.appendChild(historyLocation);

  historyPrice.classList.add("detail__list__item__history__price");
  historyDetail.appendChild(historyPrice);

  historyDelete.classList.add("detail__list__item__delete");
  historyDelete.textContent = "x";
  eachHistory.appendChild(historyDelete);
  historyDelete.addEventListener("click", deleteList);

  if (type === "수입") {
    totalBalanceAmount += price;
    totalIncomeAmount += price;
    historyPrice.textContent = price.toLocaleString("ko-KR");
    historyPrice.classList.add("income");
  } else if (type === "지출") {
    totalBalanceAmount -= price;
    totalSpendingAmount += price;
    historyPrice.textContent = (price * -1).toLocaleString("ko-KR");
    historyPrice.classList.add("spending");
  }

  totalBalance.textContent = totalBalanceAmount.toLocaleString("ko-KR");
  totalIncome.textContent = totalIncomeAmount.toLocaleString("ko-KR");
  totalSpending.textContent = totalSpendingAmount.toLocaleString("ko-KR");
};

const saveInfo = function saveEnteredInfoToList() {
  const selectedType = incomeRadio.checked ? "수입" : "지출";
  const selectedCategory =
    selectedType === "수입" ? incomeSelect.value : spendingSelect.value;
  const amount = parseFloat(
    document.querySelector('.add-list__input input[type="number"]').value
  );
  const location = document.querySelector(
    '.add-list__input input[type="text"]'
  ).value;

  const newList = {
    category: selectedCategory,
    location: location,
    price: selectedType === "수입" ? amount : -amount,
    type: selectedType,
  };

  HISTORY_LIST.push(newList);

  showList(selectedCategory, location, amount, selectedType);

  alert("저장 성공");

  incomeRadio.checked = true;
  incomeSelect.value = "월급";
  spendingSelect.value = "쇼핑";
  document.querySelector('.add-list__input input[type="number"]').value = "";
  document.querySelector('.add-list__input input[type="text"]').value = "";
};

const deleteList = function deleteOneListItemWithXButton(event) {
  modal.style.display = "flex";

  modalYes.addEventListener("click", () => {
    const deleteItem = event.target.closest(".detail__list__item");
    if (deleteItem) {
      const historyPrice = deleteItem.querySelector(
        ".detail__list__item__history__price"
      );
      const income = historyPrice.classList.contains("income");

      if (income) {
        totalBalanceAmount -= parseFloat(
          historyPrice.textContent.replace(/[^0-9.-]+/g, "")
        );
        totalIncomeAmount -= parseFloat(
          historyPrice.textContent.replace(/[^0-9.-]+/g, "")
        );
      } else {
        totalBalanceAmount += parseFloat(
          historyPrice.textContent.replace(/[^0-9.-]+/g, "")
        );
        totalSpendingAmount += parseFloat(
          historyPrice.textContent.replace(/[^0-9.-]+/g, "")
        );
      }

      totalBalance.textContent = totalBalanceAmount.toLocaleString("ko-KR");
      totalIncome.textContent = totalIncomeAmount.toLocaleString("ko-KR");
      totalSpending.textContent = totalSpendingAmount.toLocaleString("ko-KR");

      deleteItem.remove();
      modal.style.display = "none";
    }
  });
  modalNo.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

const openModal = function openModalToAddHistoryList() {
  const addModal = document.querySelector(".add-list");
  addModal.style.transform = "translate(0, 150%)";
  addModal.style.display = "flex";
  backdrop.style.display = "inline-block";

  setTimeout(() => {
    addModal.style.transition = "transform 0.3s ease";
    addModal.style.transform = "translate(0, 0)";
  }, 0);
};

const closeModal = function openModalToAddHistoryList() {
  const addModal = document.querySelector(".add-list");
  addModal.style.display = "none";
  backdrop.style.display = "none";
};

const main = () => {
  incomeCheckBox.addEventListener("change", updateHistory);
  spendingCheckBox.addEventListener("change", updateHistory);
  incomeRadio.addEventListener("click", useIncomeSelect);
  spendingRadio.addEventListener("click", useSpendingSelect);
  saveInfoButton.addEventListener("click", saveInfo);

  HISTORY_LIST.forEach(({ category, location, price, type }) => {
    showList(category, location, price, type);
  });

  addButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
};

main();
