const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "NHUY";

const player = $(".player");
const heading = $(".title-song .name-song");
const audio = $("#audio");
const playBtn = $(".btnmusic-toggle-play");
const progress = $(".progress");
const prevBtn = $("#prev-track");
const nextBtn = $("#next-track");
const randomBtn = $("#random-track");
const repeatBtn = $("#repeat-track");
let volume = document.querySelector("#volume-control");

let canvas = document.getElementById("canvas");
let cdimage = document.querySelector("#cdani");
const playlist = $(".listmusic");




const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},

  
  songs: [
    {
      name: "Ngày tàn",
      singer: "DSK",
      path: "./assets/music/rap/dsk/ngaytan-dsk.mp3",
      tag: "rap"
    },
    {
      name: "Học",
      singer: "DSK",
      path: "./assets/music/rap/dsk/hoc-dsk.mp3",
      tag: "rap",
    },
    {
        name: "Học (remix)",
        singer: "DSK",
        path: "./assets/music/rap/dsk/hocremix-dsk.mp3",
        tag: "rap"
      },
    {
        name: "Huyền thoại",
        singer: "DSK",
        path: "./assets/music/rap/dsk/huyenthoai-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Im lặng thôi",
        singer: "DSK",
        path: "./assets/music/rap/dsk/imlangthoi-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Kháng án",
        singer: "Avril Lavigne",
        path: "./assets/music/rap/dsk/khangan-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Ai cũng nghĩ chúng ta làm chủ thế giới này",
        singer: "DSK",
        path: "./assets/music/rap/dsk/aicungnghichungtalamchuthegioinay-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Anh thanh niên trẻ",
        singer: "DSK",
        path: "./assets/music/rap/dsk/anhthanhnientre-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Biết rõ vẫn khó đi",
        singer: "DSK",
        path: "./assets/music/rap/dsk/bietrokhovandi-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Bước đều bước",
        singer: "Bray",
        path: "./assets/music/rap/dsk/buocdeubuoc-bray.mp3",
        tag: "rap"
    },
    {
        name: "Cháy(ver2)",
        singer: "DSK",
        path: "./assets/music/rap/dsk/chayver2-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Chưa bao giờ",
        singer: "DSK",
        path: "./assets/music/rap/dsk/chuabaogio-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Church",
        singer: "DSK",
        path: "./assets/music/rap/dsk/church-dsk.mp3",
        tag: "rap"
    },
    {
        name: "CNG CNN",
        singer: "DSK",
        path: "./assets/music/rap/dsk/cngcnn-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Con tốt",
        singer: "DSK",
        path: "./assets/music/rap/dsk/contot-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Có sao đâu",
        singer: "DSK",
        path: "./assets/music/rap/dsk/cosaodau-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Đ** hiểu",
        singer: "DSK",
        path: "./assets/music/rap/dsk/deohieu-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Đi",
        singer: "DSK",
        path: "./assets/music/rap/dsk/di-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Điếu thuốc cuối",
        singer: "DSK",
        path: "./assets/music/rap/dsk/dieuthuoccuoi-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Độc",
        singer: "DSK",
        path: "./assets/music/rap/dsk/doc-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Đốt thêm điếu nữa",
        singer: "DSK",
        path: "./assets/music/rap/dsk/dotthem1dieunua-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Con quỷ",
        singer: "DSK",
        path: "./assets/music/rap/dsk/evil-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Fan của tao",
        singer: "DSK",
        path: "./assets/music/rap/dsk/fancuatao-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Finale",
        singer: "Bray",
        path: "./assets/music/rap/dsk/finale-bray.mp3",
        tag: "rap"
    },
    {
        name: "Freskayocean",
        singer: "DSK",
        path: "./assets/music/rap/dsk/freskayocean-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Không",
        singer: "DSK",
        path: "./assets/music/rap/dsk/khong-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Lãng mạn của anh",
        singer: "DSK",
        path: "./assets/music/rap/dsk/langmancuaanh-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Lâu rồi",
        singer: "DSK",
        path: "./assets/music/rap/dsk/lauroi-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Nếu 2",
        singer: "DSK",
        path: "./assets/music/rap/dsk/neu2-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Nếu",
        singer: "DSK",
        path: "./assets/music/rap/dsk/neu-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Nghĩ đến tao",
        singer: "DSK",
        path: "./assets/music/rap/dsk/nghidentao-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Nhạc của tao",
        singer: "DSK",
        path: "./assets/music/rap/dsk/nhaccuatao-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Nhiều lúc",
        singer: "DSK",
        path: "./assets/music/rap/dsk/nhieuluc-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Replay",
        singer: "DSK",
        path: "./assets/music/rap/dsk/replay-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Rewind",
        singer: "DSK",
        path: "./assets/music/rap/dsk/rewind-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Sách",
        singer: "DSK",
        path: "./assets/music/rap/dsk/sach-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Somelove",
        singer: "DSK",
        path: "./assets/music/rap/dsk/somelove-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Tao đã thấy",
        singer: "DSK",
        path: "./assets/music/rap/dsk/taodathay-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Thế giới này đáng bao nhiêu",
        singer: "DSK",
        path: "./assets/music/rap/dsk/thegioinaydangiabaonhieu-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Thế hệ tao",
        singer: "DSK",
        path: "./assets/music/rap/dsk/thehetao-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Thuốc lá",
        singer: "DSK",
        path: "./assets/music/rap/dsk/thuocla-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Tình yêu và thù hận",
        singer: "DSK",
        path: "./assets/music/rap/dsk/tinhyeuvathuhan-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Toàn là mây và núi",
        singer: "DSK",
        path: "./assets/music/rap/dsk/toanlamayvanui-dsk.mp3",
        tag: "rap"
    },
    {
        name: "Usualsuspects",
        singer: "DSK",
        path: "./assets/music/rap/dsk/usualsuspects-dsk.mp3",
        tag: "rap"
    },
    {
        name: "",
        singer: "DSK",
        path: "./assets/music/rap/dsk/.mp3",
        tag: "rap"
    }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    
    
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                                <p class ="tag">${song.tag}</p>
                            <div class="option">
                                <i class="fa fa-plus-circle"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },



  handleEvents: function () {
    const _this = this;



    // Xử lý phóng to / thu nhỏ CD
   

    // Xử lý khi click play
    
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        pause.style.display = "none";
        play.style.display = "block";
        audio.pause();
      } else {
        audio.play();
        play.style.display = "none";
        pause.style.display = "block";
        
      }
    };

    // Khi song được play
    
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      audioCtx.resume();
    };

    // Khi song bị pause
    
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
    };

    // Khi tiến độ bài hát thay đổi
    
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };
    const random = document.querySelector(".btnmusic-random")
    random.addEventListener("click",toggleRandom);
    function toggleRandom(){
      random.classList.toggle("is-active1");
    }
    // Xử lý lặp lại một song
    
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };
    const repeat = document.querySelector(".btnmusic-repeat")
    repeat.addEventListener("click",toggleActive);
    function toggleActive(){
      repeat.classList.toggle("is-active");
    };

    // Xử lý next song khi audio ended
    
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          pause.style.display = "block";
          play.style.display = "none";
          audio.play();
        }

        // Xử lý khi click vào song option
        
        if (e.target.closest(".option")) {
        }
      }
    };

      //Xử lý âm thanh
    volume.addEventListener("change", function(e) {
      audio.volume = e.currentTarget.value / 100;
      })
      
      //Xử lý CD
    function rotateAnimation () {
      cdimage.classList.add('rotate');
    };
    function removerotateAnimation () {
      cdimage.classList.remove('rotate');
    };
    audio.addEventListener("play",rotateAnimation);
    audio.addEventListener("pause",removerotateAnimation);

    //Đổi màu CD  
    function randomColor() {
    for (let i = 0; i < 6; i++) {
          let color =  Math.floor(Math.random()*16777215).toString(16)      
          cdimage.style.boxShadow = '0 0 7px #fff,' + "\n" + '0 0 10px #fff,' + "\n" + '0 0 14px #fff,' + "\n" + '0 0 21px' + '#' + color + "," + "\n" + '0 0 32px ' + '#' + color + "," + "\n" + '0 0 42px ' + '#' + color + "," + "\n" + '0 0 52px ' + '#' + color + "," + "\n" + '0 0 82px ' + '#' + color;
      }  
  };
  
    audio.addEventListener("play", randomColor);



    //Visualizer
    let audioCtx = new AudioContext();
    let source = audioCtx.createMediaElementSource(audio);

    let analyser = audioCtx.createAnalyser();
    let ctx = canvas.getContext("2d");


    source.connect(analyser);
    source.connect(audioCtx.destination);

    analyser.smoothingTimeConstant = 0.6;
    analyser.fftSize = 512;

    let bufferLength = analyser.frequencyBinCount;
    let data = new Uint8Array(bufferLength);
    function draw(data) {
      let gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(1, "#fff");
      ctx.fillStyle = gradient;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#0039DB";
    
      let cx = canvas.width / 2;
      let cy = canvas.height / 2;
      let radius = 100;
      let barWidth = 2;
      let barHeight = 7;
      let barSpacing = 7;
      let maxBarNum = Math.floor((radius * 4 * Math.PI) / (barWidth + barSpacing));
      let slicedPercent = Math.floor((maxBarNum * 25) / 50);
      let barNum = maxBarNum - slicedPercent;
      let freqJump = Math.floor(data.length / maxBarNum);
    
      for (let i = 0; i < barNum; i++) {
        let amplitude = data[i * freqJump];
        let alfa = (i * 2 * Math.PI) / maxBarNum;
        let beta = ((3 * 45 - barWidth) * Math.PI) / 270;
        let x = 0;
        let y = radius - (amplitude / 12 - barHeight);
        let w = barWidth;
        let h = amplitude / 6 + barHeight;
    
        ctx.save();
        ctx.translate(cx + barSpacing, cy + barSpacing);
        ctx.rotate(alfa - beta);
        ctx.fillRect(x, y, w, h);
        ctx.restore();
      }
    }
    function loopingFunction() {
      requestAnimationFrame(loopingFunction);
      analyser.getByteFrequencyData(data);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw(data);
    }
    
    loopingFunction();
    
    
    //Xử lý thanh Search
    let list = document.getElementsByClassName("song")
    function mySearch() {
      let search_query = document.getElementById("myInput").value;
        for (let i = 0; i < list.length; i++) {
          if(list[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            list[i].classList.remove("is-hidden");
        } else {
            list[i].classList.add("is-hidden");
        }
        }; 
        
    }
    let searchInput = document.getElementById("myInput");
    searchInput.addEventListener("input", mySearch);

    
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();

