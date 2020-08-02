(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{361:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript数据结构与算法之二分查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript数据结构与算法之二分查找"}},[t._v("#")]),t._v(" Javascript数据结构与算法之二分查找")]),t._v(" "),a("h3",{attrs:{id:"二分查找的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二分查找的定义"}},[t._v("#")]),t._v(" 二分查找的定义:")]),t._v(" "),a("p",[t._v("如果你要查找的数据是有序的，二分查找算法比顺序查找算法更高效。")]),t._v(" "),a("p",[t._v("要理解二分查找算 法的原理，可以想象一下你在玩一个猜数字游戏，这个数字位于 1~100 之间，而要猜的数 字是由你的朋友来选定的。游戏规则是，你每猜一个数字，你的朋友将会做出以下三种回 应中的一种:"),a("br"),t._v("\n(1) 猜对了; "),a("br"),t._v("\n(2) 猜大了; "),a("br"),t._v("\n(3) 猜小了。"),a("br"),t._v("\n根据以上规则，第一次猜 50 将会是最佳策略。如果猜的值太大，就猜 25。如果太小，就 应该猜 75。每一次猜测，都应该选择当前最小值和最大值的中间点(取决于你上次猜测 的结果是太大还是太小)。然后将这个中间值作为下次要猜的数字。只要你采用这个策略， 就可以用最少的次数猜出这个数字。")]),t._v(" "),a("h3",{attrs:{id:"二分查找的应用练习："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二分查找的应用练习："}},[t._v("#")]),t._v(" 二分查找的应用练习：")]),t._v(" "),a("p",[t._v("leetcode题目练习：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/guess-number-higher-or-lower/",target:"_blank",rel:"noopener noreferrer"}},[t._v("猜数字大小"),a("OutboundLink")],1),t._v("【简单】")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/first-bad-version/",target:"_blank",rel:"noopener noreferrer"}},[t._v("第一个错误的版本"),a("OutboundLink")],1),t._v("【简单】")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在排序数组中查找元素的第一个和最后一个位置"),a("OutboundLink")],1),t._v("【中等】")])]),t._v(" "),a("h4",{attrs:{id:"_1-猜数字大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-猜数字大小"}},[t._v("#")]),t._v(" 1. 猜数字大小")]),t._v(" "),a("h5",{attrs:{id:"题目描述："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述："}},[t._v("#")]),t._v(" 题目描述：")]),t._v(" "),a("p",[t._v("我们正在玩一个猜数字游戏。 游戏规则如下：\n我从 "),a("strong",[t._v("1")]),t._v(" 到 "),a("em",[t._v("n")]),t._v(" 选择一个数字。 你需要猜我选择了哪个数字。\n每次你猜错了，我会告诉你这个数字是大了还是小了。\n你调用一个预先定义好的接口 "),a("code",[t._v("guess(int num)")]),t._v("，它会返回 3 个可能的结果（"),a("code",[t._v("-1")]),t._v("，"),a("code",[t._v("1")]),t._v(" 或 "),a("code",[t._v("0")]),t._v("）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-1 : 我的数字比较小\n 1 : 我的数字比较大\n 0 : 恭喜！你猜对了！\n")])])]),a("h5",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例 :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: n = 10, pick = 6\n输出: 6\n")])])]),a("h5",{attrs:{id:"解题思路："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路："}},[t._v("#")]),t._v(" 解题思路：")]),t._v(" "),a("p",[t._v("二分查找")]),t._v(" "),a("p",[t._v("代码实现：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** \n * Forward declaration of guess API.\n * @param {number} num   your guess\n * @return \t            -1 if num is lower than the guess number\n *\t\t\t             1 if num is higher than the guess number\n *                       otherwise return 0\n * var guess = function(num) {}\n */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} n\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("guessNumber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("guess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("guess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-第一个错误的版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-第一个错误的版本"}},[t._v("#")]),t._v(" 2. 第一个错误的版本")]),t._v(" "),a("h5",{attrs:{id:"题目描述：-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述：-2"}},[t._v("#")]),t._v(" 题目描述：")]),t._v(" "),a("p",[t._v("你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。")]),t._v(" "),a("p",[t._v("假设你有 "),a("code",[t._v("n")]),t._v(" 个版本 "),a("code",[t._v("[1, 2, ..., n]")]),t._v("，你想找出导致之后所有版本出错的第一个错误的版本。")]),t._v(" "),a("p",[t._v("你可以通过调用 "),a("code",[t._v("bool isBadVersion(version)")]),t._v(" 接口来判断版本号 "),a("code",[t._v("version")]),t._v(" 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。")]),t._v(" "),a("h5",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("给定 n = 5，并且 version = 4 是第一个错误的版本。\n\n调用 isBadVersion(3) -> false\n调用 isBadVersion(5) -> true\n调用 isBadVersion(4) -> true\n\n所以，4 是第一个错误的版本。 \n")])])]),a("h5",{attrs:{id:"解题思路：-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路：-2"}},[t._v("#")]),t._v(" 解题思路：")]),t._v(" "),a("p",[t._v("判断isBadVersion()")]),t._v(" "),a("p",[t._v("true: r = m;")]),t._v(" "),a("p",[t._v("false: l = m + 1;")]),t._v(" "),a("p",[t._v("代码实现：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for isBadVersion()\n * \n * @param {integer} version number\n * @return {boolean} whether the version is bad\n * isBadVersion = function(version) {\n *     ...\n * };\n */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {function} isBadVersion()\n * @return {function}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("isBadVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param {integer} n Total versions\n     * @return {integer} The first bad version\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBadVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_3-在排序数组中查找元素的第一个和最后一个位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-在排序数组中查找元素的第一个和最后一个位置"}},[t._v("#")]),t._v(" 3. 在排序数组中查找元素的第一个和最后一个位置")]),t._v(" "),a("h5",{attrs:{id:"题目描述：-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述：-3"}},[t._v("#")]),t._v(" 题目描述：")]),t._v(" "),a("p",[t._v("给定一个按照升序排列的整数数组 "),a("code",[t._v("nums")]),t._v("，和一个目标值 "),a("code",[t._v("target")]),t._v("。找出给定目标值在数组中的开始位置和结束位置。")]),t._v(" "),a("p",[t._v("你的算法时间复杂度必须是 "),a("em",[t._v("O(log n)")]),t._v(" 级别。")]),t._v(" "),a("p",[t._v("如果数组中不存在目标值，返回 "),a("code",[t._v("[-1, -1]")]),t._v("。")]),t._v(" "),a("h5",{attrs:{id:"示例-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[t._v("#")]),t._v(" 示例 1:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: nums = [5,7,7,8,8,10], target = 8\n输出: [3,4]\n")])])]),a("h5",{attrs:{id:"示例-2-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2-2"}},[t._v("#")]),t._v(" 示例 2:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: nums = [5,7,7,8,8,10], target = 6\n输出: [-1,-1]\n")])])]),a("h5",{attrs:{id:"解题思路：-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路：-3"}},[t._v("#")]),t._v(" 解题思路：")]),t._v(" "),a("p",[t._v("代码实现：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("searchRange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("compute")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n         \n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            \n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("    \n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l \n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" leftinx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     \n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftinx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("leftinx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target太大，做边界一直右移到末端也没值；target太小，右边界左移到第一个元素也没找到；")]),t._v("\n\n     res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" leftinx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);