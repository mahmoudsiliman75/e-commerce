<template>
  <div class="tab_content">
    <div class="chat_content">
      <!-- START:: HEAD CHAT -->
      <div class="chat-header">
        <div class="admin-logo">
          <img src="../../assets/media/logo/logo.png" alt="Logo" />
          <small class="status_dot"></small>
          <h4>Administration</h4>
        </div>
        <div class="chat-search">
          <input
            type="search"
            placeholder="Search ..."
            :class="SearchActive == false ? '' : 'SearchActive'"
          />
          <button type="button" class="btn" @click="toggleClassActive">
            <SearchIcon size="1.5x" />
          </button>
        </div>
      </div>
      <!-- END:: HEAD CHAT -->

      <!-- START:: BODY CHAT -->
      <div class="chat-body" v-chat-scroll>
        <div class="messageflex">
          <div class="singleMessage">
            <p>It is a long established fact that a reader</p>
            <span class="lastseen">
              <CheckIcon size="1.3x" />
              10:45 Am
            </span>
          </div>
        </div>
        <div
          class="messageflex sender"
          v-for="message in messageArea"
          :key="message.id"
          v-animate-css="'fadeIn'"
        >
          <div class="singleMessage">
            <p
              v-if="message.content != null"
              v-html="message.content.replace(/(\n|\n|\r)/gm, '<br />')"
            ></p>
            <audio controls v-if="message.audioSrc != ''">
              <source :src="message.audioSrc" type="audio/ogg" />
            </audio>

            <span class="lastseen">
              <CheckIcon size="1.3x" />
              {{ message.time }}
            </span>
          </div>
        </div>
      </div>
      <!-- END:: BODY CHAT -->

      <!-- START:: BOX UPLOAD -->
      <div class="chat-box-upload" v-if="imagesArray != ''">
        <div
          v-for="(image, index) in imagesArray"
          :key="index"
          class="single-item"
        >
          <span @click="remmoveImage(index)"> <XIcon size="1.5x" /> </span>
          <img :src="image.src" class="upload_img" />
        </div>
      </div>

      <div class="chat-box-upload" v-if="videosArray != ''">
        <div
          v-for="(video, index) in videosArray"
          :key="index"
          class="single-item"
        >
          <span @click="remmoveVideos(index)"> <XIcon size="1.5x" /> </span>
          <video controls>
            <source :src="video.src" type="video/mp4" />
            <source :src="video.src" type="video/ogg" />
          </video>
        </div>
      </div>

      <div class="chat-box-upload" v-if="filesArray != ''">
        <div
          v-for="(file, index) in filesArray"
          :key="index"
          class="single-item"
        >
          <span @click="remmoveFiles(index)"> <XIcon size="1.5x" /> </span>
          <img src="../../assets/media/icons/file.png" :alt="file.src" />
          <h3>{{ file.name }}</h3>
        </div>
      </div>
      <!-- END:: BOX UPLOAD -->

      <!-- START:: FOOTER CHAT -->
      <div class="chat-footer">
        <div class="files-and-emoji">
          <button type="button" class="btn">
            <!-- START:: EMOJI CARD -->
            <div class="chat-emoji wrapper">
              <emoji-picker @emoji="append" :search="searchEmoji">
                <div
                  class="emoji-invoker"
                  slot="emoji-invoker"
                  slot-scope="{ events: { click: clickEvent } }"
                  @click.stop="clickEvent"
                >
                  <i class="far fa-grin-alt"></i>
                </div>
                <div
                  slot="emoji-picker"
                  slot-scope="{ emojis, insert, display }"
                >
                  <div
                    class="emoji-picker"
                    :style="{ top: display.y + 'px', left: display.x + 'px' }"
                  >
                    <div class="emoji-picker__search">
                      <input
                        type="text"
                        v-model="searchEmoji"
                        placeholder="Search For Emoji"
                        v-focus
                      />
                    </div>
                    <div>
                      <div
                        v-for="(emojiGroup, category) in emojis"
                        :key="category"
                      >
                        <h5>{{ category }}</h5>
                        <div class="emojis">
                          <span
                            v-for="(emoji, emojiName) in emojiGroup"
                            :key="emojiName"
                            @click="insert(emoji)"
                            :title="emojiName"
                            >{{ emoji }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </emoji-picker>
            </div>
            <!-- END:: EMOJI CARD -->
          </button>
          <button type="button" class="btn" @click="showProperties">
            <i class="fas fa-paperclip"></i>
            <div
              :class="properties == false ? 'properties' : 'properties show'"
            >
              <ul>
                <li>
                  <i class="far fa-image"></i>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    @change="UploadImages"
                  />
                </li>
                <li>
                  <i class="far fa-file-alt"></i>
                  <input
                    type="file"
                    multiple
                    accept=".doc, .txt, .php, .html, .css"
                    @change="UploadFiles"
                  />
                </li>
                <li>
                  <i class="fas fa-video"></i>
                  <input
                    type="file"
                    multiple
                    accept="video/mp4,video/x-m4v,video/*"
                    @change="UploadVideos"
                  />
                </li>
              </ul>
            </div>
          </button>
        </div>

        <div class="message-area">
          <textarea
            v-model.trim="messageText"
            @keydown.enter.exact.prevent
            @keyup.enter.exact="addMessage"
          ></textarea>
        </div>

        <div class="voice-chat">
          <button
            type="button"
            class="btn microphone"
            v-if="this.messageText.length == 0"
          >
            <audio-recorder
              upload-url="YOUR_API_URL"
              :after-recording="afterRecording"
            />
          </button>

          <button
            type="button"
            class="btn plane"
            @click="addMessage"
            v-if="this.messageText.length != 0"
          >
            <NavigationIcon />
          </button>
        </div>
      </div>

      <!-- END:: FOOTER CHAT -->
    </div>
  </div>
</template>

<script>
import {
  SearchIcon,
  CheckIcon,
  NavigationIcon,
  XIcon,
} from "vue-feather-icons";
import EmojiPicker from "vue-emoji-picker";
export default {
  name: "Chat",

  components: {
    SearchIcon,
    CheckIcon,
    NavigationIcon,
    XIcon,
    EmojiPicker,
  },
  data() {
    return {
      // START:: UPLOAD PART
      imagesArray: [],
      imagesPreview: [],
      videosArray: [],
      videosPreview: [],
      filesArray: [],
      filePreview: [],
      // END:: UPLOAD PART
      messageArea: [
        {
          id: 100000000000000,
          content: "It is a long established fact that a reader ",
          time: new Date().toLocaleTimeString(),
          audioSrc: "",
        },
      ],
      recordArray: "",
      messageText: "",
      // START:: AUDIO RECORDER
      uniqueID: 1,
      // START:: GENRAL
      SearchActive: false,
      searchEmoji: "",
      properties: false,
    };
  },

  methods: {
    toggleClassActive() {
      if (this.SearchActive) {
        this.SearchActive = false;
      } else {
        this.SearchActive = true;
      }
    },
    append(emoji) {
      this.messageText += emoji;
    },
    showProperties() {
      if (this.properties) {
        this.properties = false;
      } else {
        this.properties = true;
      }
    },
    // START:: UPLOAD IMAGES & VIDEOS & FILES
    UploadImages(e) {
      var selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        let img = {
          src: URL.createObjectURL(selectedFiles[i]),
          file: selectedFiles[i],
        };
        this.imagesArray.push(img);
        this.imagesPreview = this.imagesArray;
      }
    },
    remmoveImage(index) {
      this.imagesArray.splice(index, 1);
    },
    UploadVideos(e) {
      var selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        let videos = {
          src: URL.createObjectURL(selectedFiles[i]),
          file: selectedFiles[i],
        };
        this.videosArray.push(videos);
        this.videosPreview = this.videosArray;
      }
    },
    remmoveVideos(index) {
      this.videosArray.splice(index, 1);
    },

    UploadFiles(e) {
      var selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        let file = {
          src: URL.createObjectURL(selectedFiles[i]),
          file: selectedFiles[i],
          name: selectedFiles[i].name,
        };
        this.filesArray.push(file);
        this.filePreview = this.filesArray;
      }
    },
    remmoveFiles(index) {
      this.filesArray.splice(index, 1);
    },

    // END:: UPLOAD IMAGES & VIDEOS & FILES

    // START:: ADD MESSAGE

    addMessage() {
      if (!this.messageText) {
        if (this.recordArray.length > 0) {
          this.messageArea.push({
            id: this.uniqueID++,
            time: new Date().toLocaleTimeString(),
            audioSrc: this.recordArray,
          });
          this.recordArray = "";
        }
        return;
      } else {
        this.messageArea.push({
          id: this.uniqueID++,
          content: this.messageText,
          time: new Date().toLocaleTimeString(),
          audioSrc: this.recordArray,
        });
        this.messageText = "";
        this.recordArray = "";
      }
      // Create message Object
    },

    // END:: ADD MESSAGE

    // START:: CHAT RECORDER
    afterRecording(record) {
      this.recordArray = record.url;
      this.addMessage();
    },

    // END:: CHAT RECORDER
  },

  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  mounted() {},
};
</script>
