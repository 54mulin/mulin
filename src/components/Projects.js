import signalProcessing from "../assets/signalProcessing.jpeg"
import twlink from "../assets/twlink.png"
import trash from "../assets/trash.png"
import faceMask from "../assets/faceMask.png"

export const prjs = [
    {
        title: 'Signal Processing-Based Model Training and Analysis GUI Implementation - Using Food Spectra as an Example',
        devYear: '2023 ',
        intro: {
            desc: "System Introduction :",
            list: [
                { title: "在當今食品科學領域，食品的質量和安全性是至關重要的。為了確保食品的品質，常常倚賴工具，例如光譜分析，來解析食品中的成分和特性。光譜分析是一種通過測量不同波長的光線相對強度來獲得數據的技術，它可以用於分析各種食品，從農產品到飲料。而我們製作了關於食品光譜分析工具，這個工具的核心是一個Python的GUI應用程序，使用了多個Python庫，包括Tkinter、pandas、numpy、scipy、scikit-learn和matplotlib等，以實現一個直觀的圖形使用者界面（GUI），使用者能夠載入食品光譜數據，配置模型參數，並可視化分析結果。",desc: "In today's field of food science, the quality and safety of food products are of paramount importance. To ensure the quality of food, tools such as spectral analysis are often relied upon to decipher the composition and characteristics of food items. Spectral analysis is a technique that involves measuring the relative intensities of light at different wavelengths to obtain data. It can be used to analyze various types of food, ranging from agricultural products to beverages. We have developed a tool for food spectral analysis, with the core being a Python-based GUI application. This tool utilizes several Python libraries, including Tkinter, pandas, numpy, scipy, scikit-learn, and matplotlib, to create an intuitive graphical user interface (GUI). Users can load food spectral data, configure model parameters, and visualize analysis results."},
                { title: "應用範圍及結論", desc: "專注於信號處理和部分最小二乘回歸（PLS）建模技術，儘管最初設計用於食品光譜分析，但它具有廣泛的應用潛力。這個工具的主要功能包括光譜數據的載入、數據字段的選擇、信號處理（Savitzky-Golay濾波）、模型建立和性能評估。它還提供了數據可視化功能，以更好地理解數據的特性。應用範圍廣泛，除了食品科學，還可用於藥物研究、化學分析、環境監測、醫學影像處理、材料科學、工業檢測和地球科學等領域。提供了一個靈活且強大的工具，以處理和分析多種類型的光譜和數據，幫助他們更好地理解並做出有價值的預測，提高數據處理的效率和準確性。" },
            ]
        },
        languages: " Python",
        img: signalProcessing,
    },
    {
        title: 'twlink.app 台灣加密型實聯制(close permanently)',
        devYear: '2021 ',
        intro: {
            desc: "為了加強安全加密及方便性，主要以下列為重點 :",
            list: [
                { title: "快速建立實聯制表單", desc: "店家可快速建立標準的實聯制填寫表單格式，不用額外設置" },
                { title: "個資加密保存", desc: "使用 RSA 2048bit 公鑰加密後存入資料庫，私鑰嚴格保存於離線環境，嚴格限制有疫調需求才揭露" },
                { title: "資料定期刪除", desc: "所蒐集之資料僅保存 28 日，屆期自動銷毀" },
                { title: "快速填寫", desc: "可選擇是否將填寫資訊紀錄於個人裝置中，方便下次自動代入填寫" },
            ]
        },
        languages: " Vue / JavaScript / SCSS / HTML",
        img: twlink,
        job: " Web Engineer -",
    },
    {
        title: '想丟垃圾?去追圾垃車吧! - LINE bot',
        devYear: '2019 ',
        intro: {
            desc: "準時鏟屎丟垃圾車是他的使命，選擇了一條與眾不同的路，就是「垃圾車王」。",
            list: [
                { title: "在貓奴的驅使下，誕生「想丟垃圾?去追圾垃車吧!」" },
            ]
        },
        languages: " JavaScript ",
        img: trash,
        job: " Database Administrator -",
    },
    {
        title: '口罩哪裡買?附近剩餘數量查詢  - LINE bot (close permanently)',
        devYear: '2020 ',
        intro: {
            desc: "2020年2月6日 口罩販售實名上路，政府提供查詢的方式有 衛福部健保署網站或特約藥局excel，",
            list: [
                { title: "寫成一個 LINE bot 方便查詢自己附近的藥局，可個別詳細查看各藥局當前數量，如果還沒有口罩，希望能幫到你!" },
            ]
        },
        languages: " JavaScript / Dockerfile ",
        img: faceMask,
        job: " Data integration -",
    },
]  