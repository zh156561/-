/* 获取全部li */
let muiMenu = document.querySelectorAll(".mui")
/* 获取所有箭头*/
let dropdown = document.querySelectorAll(".dropdown")
/* 子菜单 */
let submenu = document.querySelectorAll(".submenu")
/* ul */
let muiListMenu = document.querySelector(".muiList")

var index = 0;
muiMenu.forEach((item, i) => {
	// console.log(item)
	index++;
	muiMenu[i].addEventListener('click', () => {
		if (index = i+1) {
			rotate();
			submenuList();
		}
	});
}) 

/* 箭头方向旋转  /  回正 */
function rotate() {
	dropdown.forEach((item, n) => {
		if (n === index-1) {
			dropdown[n].style.transform = "rotate(90deg)";
			dropdown[n].style.transition = "all 0.3s ease";
		} else {
			dropdown[n].style.transform = "rotate(00deg)";
		}
	});
}

/* 子菜单显示 / 隐藏 */
function submenuList() {
	submenu.forEach((item, j) => {
		if (j === index-1) {
			// submenu[j].style.display = "block";
			submenu[j].style.opacity = "1";
			submenu[j].style.height = "173px";
		}else{
			submenu[j].style.opacity = "0";
			submenu[j].style.height = "0px";
			// submenu[j].style.display = "none"
		}
	});
}
