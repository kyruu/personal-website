window.onload = function () {
    // attach event listeners to navbar links
    $("#logo").on("click", handleLogoBtnPress);
    $("#about").on("click", handleAbtBtnPress);
    $("#work").on("click", handleWorkBtnPress);
    $("#skills").on("click", handleSkillsBtnPress);
    $("#projects").on("click", handleProjectsBtnPress);
    $("#extra").on("click", handleExtraBtnPress);
    $("#links").on("click", handleLinksBtnPress);
  
    // attach event listeners to links
    $("#github").on("click", handleGitHubBtnPress);
    $("#linkedin").on("click", handleLinkedInBtnPress);
  
    // attach event listeners to anchors
    $("#about-more").on("click", handleAboutMoreBtnPress);
    $("#projects-more").on("click", handleProjectsMoreBtnPress);
  };
  
  let handleLogoBtnPress = function () {
    location.href = "#start";
  };
  
  let handleAbtBtnPress = function () {
    location.href = "#about_tab";
  };
  
  let handleWorkBtnPress = function () {
    location.href = "#work_tab";
  };
  
  let handleSkillsBtnPress = function () {
    location.href = "#skills_tab";
  };
  
  let handleProjectsBtnPress = function () {
    location.href = "#projects_tab";
  };
  
  let handleExtraBtnPress = function () {
    location.href = "#extra_tab";
  };
  
  let handleLinksBtnPress = function () {
    location.href = "#links_tab";
  };
  
  let handleGitHubBtnPress = function () {
    window.open("https://github.com/kyruu", "_blank");
  };
  
  let handleLinkedInBtnPress = function () {
    window.open("https://www.linkedin.com/in/kyle-maatallah/", "_blank");
  };
  
  /**
   * Replace "Read More" button with "Read Less" in About tab
   */
   let handleAboutMoreBtnPress = function () {
    $("#about-hidden-desc").css("display", "block");
    $("#about-more").replaceWith('<a class="link" id="about-less">Read less</a>');
    $("#about-less").on("click", handleAboutLessBtnPress);
  };
  
  /**
   * Replace "Read Less" button with "Read More", hide description, and reattach listener in About tab
   */
  let handleAboutLessBtnPress = function () {
    $("#about-hidden-desc").css("display", "none");
    location.href = "#about_tab";
    $("#about-less").replaceWith('<a class="link" id="about-more">Read more</a>');
    $("#about-more").on("click", handleAboutMoreBtnPress);
  };
  
  /**
   * Replace "Read More" button with "Read Less" in Projects tab
   */
  let handleProjectsMoreBtnPress = function () {
    $("#projects-hidden-desc").css("display", "block");
    $("#projects-more").replaceWith('<a class="link" id="projects-less">Read less</a>');
    $("#projects-less").on("click", handleProjectsLessBtnPress);
  };
  
  /**
   * Replace "Read Less" button with "Read More", hide description, and reattach listener in Projects tab
   */
  let handleProjectsLessBtnPress = function () {
    $("#projects-hidden-desc").css("display", "none");
    location.href = "#projects_tab";
    $("#projects-less").replaceWith('<a class="link" id="projects-more">Read more</a>');
    $("#projects-more").on("click", handleProjectsMoreBtnPress);
  };