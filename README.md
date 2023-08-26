这是HsiaTein的个人博客
使用方法:
page模板的article用于写文章, id为title的h1用于写标题, 不需要写标签
写完后把文件命名成标题(必须完全一样)
然后打开pagedata.js, 往里面的json字符串里添加文章的标题和标签, 打开文章网页, 标签由JS自动生成
更新博客需要把文章上传到pages文件夹, 并且更新pagedata.js

home.html是博客主页
pagedata.js存储了博客名字, 博客标签数据
indexgen.js会根据pagedata.js在主页生成目录和标签(用于标签筛选)
labelgen.js会根据pagedata.js在文章生成标签
labelsearch.js用于标签筛选文章
preview.js用于生成在主页预览文章的iframe
style.css负责主页外观
pagestyle.css负责文章外观

标签选择只需要点击标签即可, 周围浅蓝色轮廓变深即为选中, 支持多选
