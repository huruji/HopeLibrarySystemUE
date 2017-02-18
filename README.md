# HopeLibrarySystemUE
厚朴工作室图书设备管理系统前端界面


##命名规范
1、文件夹、文件名、class、id的命令一律采用中划线-连接

2、class命名中拥有层级关系时，应该将相应的所有父级命名一律放置在前，以便代码维护时能迅速分辨出相应的层级关系，如.header的下一级.header-right,再下一级为.header-right-aside

3、给js使用的id和class以js-为前缀

4、html中自定义的属性一律以data-为前缀

##整个前端项目目录结构说明：
整个项目采用gulp自动化构建，dist为输出文件夹，src为相应的开发文件夹

####src文件目录结构说明
src文件夹下的html、css、img、js文件夹分别用于存放相应的文件，其中css是sass文件的输出文件夹

#####sass项目的构建
sass文件夹下分为base、components、helpers、layout、pages、themes文件夹，相应的功能划分如下：

base：基本的css样式，一般用于存放css reset文件

components：组件样式，将网站看成组件化，一个组件就是components的一个文件

helpers：整个项目的辅助，如整个项目的变量，整个项目mixin的设置，同时可以存放项目使用的UI库，这里就像是开发者自己积累的开发资本一样

layout：整个项目的布局样式

pages：整个项目不用页面单独存在的样式

themes：当整个项目有不同主题样式时，将切换主题时的更换的代码放置于此，同理，如果主题切换很复杂，依旧可以使用组件化的思想

main.scss：这个为主文件，将所有的scss文件结合在一起输出

