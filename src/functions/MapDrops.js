const data = require("../Data/SavedData");
const {MapDropsChecker} = require("./MapDropsChecker");

async function MapDrops(dropspage) {
    await dropspage.reload({
        waitUntil: ["networkidle2", "domcontentloaded"]
    })
    data.dropsmap = [];

    //Check if drop exist then map it.
    await MapDropsChecker('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[3]/div[2]/div/div[1]/div[1]/div/div/div[2]/div/p', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[3]/div[2]/div/div[1]/div[2]/div[2]/p/span', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[3]/div[1]/div[3]/div[2]/div/p/a', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(3) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-visible > div.tw-align-center.tw-mg-t-05 > p > span', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(3) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-flex.tw-flex-grow-1 > div > div > div.tw-align-items-center.tw-c-background-alt.tw-flex.tw-justify-content-center.tw-pd-2.tw-relative > div.tw-absolute.tw-align-items-center.tw-c-background-overlay.tw-c-text-overlay.tw-flex.tw-full-height.tw-full-width.tw-justify-content-center.tw-left-0.tw-top-0 > button', dropspage)
    //Drop2
    await MapDropsChecker('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[4]/div[2]/div/div[1]/div[1]/div/div/div[2]/div/p', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[4]/div[2]/div/div[1]/div[2]/div[2]/p/span', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[4]/div[1]/div[3]/div[2]/div/p/a', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(4) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-visible > div.tw-align-center.tw-mg-t-05 > p > span','#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(4) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-flex.tw-flex-grow-1 > div > div > div.tw-align-items-center.tw-c-background-alt.tw-flex.tw-justify-content-center.tw-pd-2.tw-relative > div.tw-absolute.tw-align-items-center.tw-c-background-overlay.tw-c-text-overlay.tw-flex.tw-full-height.tw-full-width.tw-justify-content-center.tw-left-0.tw-top-0 > button', dropspage)
    //Drop3
    await MapDropsChecker('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[5]/div[2]/div/div[1]/div[1]/div/div/div[2]/div/p', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[5]/div[2]/div/div[1]/div[2]/div[2]/p/span', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[5]/div[1]/div[3]/div[2]/div/p/a', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(5) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-visible > div.tw-align-center.tw-mg-t-05 > p > span','#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(5) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-flex.tw-flex-grow-1 > div > div > div.tw-align-items-center.tw-c-background-alt.tw-flex.tw-justify-content-center.tw-pd-2.tw-relative > div.tw-absolute.tw-align-items-center.tw-c-background-overlay.tw-c-text-overlay.tw-flex.tw-full-height.tw-full-width.tw-justify-content-center.tw-left-0.tw-top-0 > button', dropspage)
    //Drop4
    await MapDropsChecker('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[6]/div[2]/div/div[1]/div[1]/div/div/div[2]/div/p', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[6]/div[2]/div/div[1]/div[2]/div[2]/p/span', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[6]/div[1]/div[3]/div[2]/div/p/a', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(6) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-visible > div.tw-align-center.tw-mg-t-05 > p > span','#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(6) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-flex.tw-flex-grow-1 > div > div > div.tw-align-items-center.tw-c-background-alt.tw-flex.tw-justify-content-center.tw-pd-2.tw-relative > div.tw-absolute.tw-align-items-center.tw-c-background-overlay.tw-c-text-overlay.tw-flex.tw-full-height.tw-full-width.tw-justify-content-center.tw-left-0.tw-top-0 > button', dropspage)
    //Drop5
    await MapDropsChecker('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[7]/div[2]/div/div[1]/div[1]/div/div/div[2]/div/p', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[7]/div[2]/div/div[1]/div[2]/div[2]/p/span', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[7]/div[1]/div[3]/div[2]/div/p/a', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(7) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-visible > div.tw-align-center.tw-mg-t-05 > p > span','#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(7) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-flex.tw-flex-grow-1 > div > div > div.tw-align-items-center.tw-c-background-alt.tw-flex.tw-justify-content-center.tw-pd-2.tw-relative > div.tw-absolute.tw-align-items-center.tw-c-background-overlay.tw-c-text-overlay.tw-flex.tw-full-height.tw-full-width.tw-justify-content-center.tw-left-0.tw-top-0 > button', dropspage)
    //Drop6
    await MapDropsChecker('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[8]/div[2]/div/div[1]/div[1]/div/div/div[2]/div/p', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[8]/div[2]/div/div[1]/div[2]/div[2]/p/span', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[8]/div[1]/div[3]/div[2]/div/p/a', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(8) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-visible > div.tw-align-center.tw-mg-t-05 > p > span','#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(8) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-flex.tw-flex-grow-1 > div > div > div.tw-align-items-center.tw-c-background-alt.tw-flex.tw-justify-content-center.tw-pd-2.tw-relative > div.tw-absolute.tw-align-items-center.tw-c-background-overlay.tw-c-text-overlay.tw-flex.tw-full-height.tw-full-width.tw-justify-content-center.tw-left-0.tw-top-0 > button', dropspage)
    //Drop7
    await MapDropsChecker('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[9]/div[2]/div/div[1]/div[1]/div/div/div[2]/div/p', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[9]/div[2]/div/div[1]/div[2]/div[2]/p/span', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[9]/div[1]/div[3]/div[2]/div/p/a', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(9) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-visible > div.tw-align-center.tw-mg-t-05 > p > span','#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(9) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-flex.tw-flex-grow-1 > div > div > div.tw-align-items-center.tw-c-background-alt.tw-flex.tw-justify-content-center.tw-pd-2.tw-relative > div.tw-absolute.tw-align-items-center.tw-c-background-overlay.tw-c-text-overlay.tw-flex.tw-full-height.tw-full-width.tw-justify-content-center.tw-left-0.tw-top-0 > button', dropspage)
    //Drop8
    await MapDropsChecker('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[10]/div[2]/div/div[1]/div[1]/div/div/div[2]/div/p', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[10]/div[2]/div/div[1]/div[2]/div[2]/p/span', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[10]/div[1]/div[3]/div[2]/div/p/a', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(10) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-visible > div.tw-align-center.tw-mg-t-05 > p > span','#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(10) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-flex.tw-flex-grow-1 > div > div > div.tw-align-items-center.tw-c-background-alt.tw-flex.tw-justify-content-center.tw-pd-2.tw-relative > div.tw-absolute.tw-align-items-center.tw-c-background-overlay.tw-c-text-overlay.tw-flex.tw-full-height.tw-full-width.tw-justify-content-center.tw-left-0.tw-top-0 > button', dropspage)
    //Drop9
    await MapDropsChecker('//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[11]/div[2]/div/div[1]/div[1]/div/div/div[2]/div/p', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[11]/div[2]/div/div[1]/div[2]/div[2]/p/span', '//*[@id="root"]/div/div[2]/div/main/div[2]/div[3]/div/div/div/div/div/div/div[2]/div[11]/div[1]/div[3]/div[2]/div/p/a', '#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(11) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-visible > div.tw-align-center.tw-mg-t-05 > p > span','#root > div > div.tw-flex.tw-flex-column.tw-flex-nowrap.tw-full-height > div > main > div.root-scrollable.scrollable-area > div.simplebar-scroll-content > div > div > div > div > div > div > div.inventory-max-width > div:nth-child(11) > div.tw-pd-x-3.tw-pd-y-1 > div > div.tw-flex.tw-flex-column.tw-mg-t-2 > div.tw-flex.tw-flex-grow-1 > div > div > div.tw-align-items-center.tw-c-background-alt.tw-flex.tw-justify-content-center.tw-pd-2.tw-relative > div.tw-absolute.tw-align-items-center.tw-c-background-overlay.tw-c-text-overlay.tw-flex.tw-full-height.tw-full-width.tw-justify-content-center.tw-left-0.tw-top-0 > button', dropspage)
}


module.exports = {
    MapDrops
}