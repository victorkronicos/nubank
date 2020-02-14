// Rewards Expandido

const RewardsBtn = document.querySelector('#rewards-btn');
const RewardsView = document.querySelector('#rewards-view');
const RewardsReturn = document.querySelector('#rewards-return');

RewardsBtn.addEventListener("click", function () {
    RewardsView.classList.add('whitescreen');
});

RewardsReturn.addEventListener("click", function () {
    RewardsView.classList.remove('whitescreen');
});