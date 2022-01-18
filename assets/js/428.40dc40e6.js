(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{887:function(a,e,s){"use strict";s.r(e);var t=s(56),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"安装-nu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-nu"}},[a._v("#")]),a._v(" 安装 Nu")]),a._v(" "),s("p",[a._v("目前最佳的获取 Nu 的方法是从 "),s("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("crates.io"),s("OutboundLink")],1),a._v(" 安装，到我们的 "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("发布页"),s("OutboundLink")],1),a._v(" 下载预编译二进制包，从源代码构建，或者拉取一个预构建的 Docker 容器。")]),a._v(" "),s("h2",{attrs:{id:"预编译二进制包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预编译二进制包"}},[a._v("#")]),a._v(" 预编译二进制包")]),a._v(" "),s("p",[a._v("你可以从 "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("发布页"),s("OutboundLink")],1),a._v(" 下载预编译的二进制包。作为替代，如果你在 macOS 上使用 "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Homebrew"),s("OutboundLink")],1),a._v(" ，你可以通过运行 "),s("code",[a._v("brew install nushell")]),a._v(" 来下载此二进制文件。")]),a._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("p",[s("strong",[a._v("请注意：")]),a._v(" Nu 只在 Windows 10 上工作，目前不提供 Windows 7/8.1 的支持。")]),a._v(" "),s("p",[a._v("从 "),s("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("发布页"),s("OutboundLink")],1),a._v(" 下载当前发行版的 "),s("code",[a._v(".zip")]),a._v(" 文件，然后将它解压到一个地方，例如：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C:\\Program Files\n")])])]),s("p",[a._v("然后，将 "),s("code",[a._v("nu")]),a._v(" 所在的这个文件夹添加到 PATH 环境变量中。一旦你完成了这些步骤，就可以通过 "),s("code",[a._v("nu")]),a._v(" 命令来运行 Nu 了。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> nu\nC:\\Users\\user>\n")])])]),s("p",[a._v("如果你在使用 PowerShell 上的 "),s("a",{attrs:{href:"https://scoop.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("scoop"),s("OutboundLink")],1),a._v(" 作为软件包管理器，那么我们在 main 仓库中就提供了 Nu 的显彰，可以直接运行命令 "),s("code",[a._v("scoop install nu")]),a._v(" 来安装。")]),a._v(" "),s("p",[a._v("如果你在使用新的 "),s("a",{attrs:{href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"}},[a._v("Windows Terminal"),s("OutboundLink")],1),a._v(" 你可以将 "),s("code",[a._v("nu")]),a._v(" 设为默认 Shell 程序，将")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"guid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"hidden"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Nu Shell"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"commandline"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nu.exe"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("添加到 Terminal 的 "),s("code",[a._v('"profiles"')]),a._v(" 配置文件（JSON 文件）中。最后一步是更改 "),s("code",[a._v('"defaultProfile"')]),a._v(" 为:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"defaultProfile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[a._v("现在， "),s("code",[a._v("nu")]),a._v(" 将在 Windows Terminal 的启动时加载。")]),a._v(" "),s("h2",{attrs:{id:"预构建-docker-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预构建-docker-容器"}},[a._v("#")]),a._v(" 预构建 Docker 容器")]),a._v(" "),s("p",[a._v("如果你想要拉取一个预构建的容器，你可以在 Quay.io 上浏览 "),s("a",{attrs:{href:"https://quay.io/organization/nushell",target:"_blank",rel:"noopener noreferrer"}},[a._v("nushell organization"),s("OutboundLink")],1),a._v("\n标签。拉取容器可以通过：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull quay.io/nushell/nu\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull quay.io/nushell/nu-base\n")])])]),s("p",[a._v('"nu-base" 和 "nu" 都提供了 '),s("code",[a._v("nu")]),a._v(" 二进制文件，但是 nu-base 还包含了容器和所有依赖在 "),s("code",[a._v("/code")]),a._v(" 目录下的源代码。")]),a._v(" "),s("p",[a._v("可选地，你可以使用 "),s("a",{attrs:{href:"https://github.com/nushell/nushell/tree/master/docker",target:"_blank",rel:"noopener noreferrer"}},[a._v("dockerfiles provided"),s("OutboundLink")],1),a._v(" 来自行构建容器。\n构建基本容器：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build -f docker/Dockerfile.nu-base -t nushell/nu-base "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("构建一个更小的容器（使用多阶段构建）：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build -f docker/Dockerfile -t nushell/nu "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("你可以用以下命令运行其中一个容器：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it nushell/nu-base\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it nushell/nu\n/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v("\n")])])]),s("p",[a._v("如果尺寸对你很重要的话，第二个容器要小得多。")]),a._v(" "),s("h2",{attrs:{id:"准备就绪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备就绪"}},[a._v("#")]),a._v(" 准备就绪")]),a._v(" "),s("p",[a._v("在我们开始安装 Nu 之前，我们需要确认我们的系统拥有必要的依赖。目前，这意味着我们需要确保安装了 Rust 工具链和本地依赖项。")]),a._v(" "),s("h3",{attrs:{id:"安装编译套装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装编译套装"}},[a._v("#")]),a._v(" 安装编译套装")]),a._v(" "),s("p",[a._v("为了使 Rust 正常工作，你需要在系统上安装兼容的编译器套件。 这些是推荐的编译器套件：")]),a._v(" "),s("ul",[s("li",[a._v("Linux: GCC or Clang")]),a._v(" "),s("li",[a._v("macOS: Clang (install Xcode)")]),a._v(" "),s("li",[a._v("Windows: "),s("a",{attrs:{href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Visual Studio 社区版"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("对于 Linux 和 macOS，一旦你安装了这些编译器，你就可以准备通过 "),s("code",[a._v("rustup")]),a._v(" （见后文） 来安装 Rust 了。")]),a._v(" "),s("p",[a._v('对于 Windows，当你安装了 Visual Studio 社区版，确保安装了可选的 "C++ build tools" 工作负载为我们提供所需的 '),s("code",[a._v("link.exe")]),a._v("。然后我们才可以进入下一步。")]),a._v(" "),s("h3",{attrs:{id:"安装-rust"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-rust"}},[a._v("#")]),a._v(" 安装 Rust")]),a._v(" "),s("p",[a._v("如果我们还没有在系统上安装 Rust，则最佳方法是通过 "),s("a",{attrs:{href:"https://rustup.rs",target:"_blank",rel:"noopener noreferrer"}},[a._v("rustup"),s("OutboundLink")],1),a._v(" 来安装。Rustup 是一个管理 Rust 安装，包括多版本多工具链安装的环境管理器。")]),a._v(" "),s("p",[a._v("Nu 目前需要 "),s("strong",[a._v("最近的稳定版（1.43 或更新）")]),a._v(" 的 Rust。最好让 "),s("code",[a._v("rustup")]),a._v(" 来为你找到正确的版本。当你第一次运行 rustup ，它将会询问你要安装的 Rust 版本：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Current installation options:\n\ndefault host triple: x86_64-unknown-linux-gnu\ndefault toolchain: stable\nprofile: default\nmodify PATH variable: yes\n\n1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n")])])]),s("p",[a._v("一旦我们准备好了，按下 1 然后回车。")]),a._v(" "),s("p",[a._v("如果你不喜欢用 "),s("code",[a._v("rustup")]),a._v(" 来安装，你也可以通过其他方法（例如 Linxu 发行版的包管理器）。只要确保 Rust 版本在 1.39 以上就好。")]),a._v(" "),s("h2",{attrs:{id:"依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[a._v("#")]),a._v(" 依赖")]),a._v(" "),s("h3",{attrs:{id:"debian-ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu"}},[a._v("#")]),a._v(" Debian/Ubuntu")]),a._v(" "),s("p",[a._v('你需要安装 "pkg-config" 和 "libssl-dev" 包：')]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("apt install pkg-config libssl-dev\n")])])]),s("p",[a._v("希望使用 "),s("code",[a._v("rawkey")]),a._v(" 或 "),s("code",[a._v("clipboard")]),a._v(' 两个可选特性的 Linux 用户需要安装 "libx11-dev" 和 "libxcb-composite0-dev" 包：')]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("apt install libxcb-composite0-dev libx11-dev\n")])])]),s("h3",{attrs:{id:"rhel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rhel"}},[a._v("#")]),a._v(" RHEL")]),a._v(" "),s("p",[a._v('你需要安装 "libxcb", "libssl-dev" 和 "lib11-dev"。')]),a._v(" "),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" macOS")]),a._v(" "),s("p",[a._v("使用 "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Homebrew"),s("OutboundLink")],1),a._v('，你需要安装 "openssl" 和 "cmake"：')]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew install openssl cmake\n")])])]),s("h2",{attrs:{id:"从-crates-io-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-crates-io-安装"}},[a._v("#")]),a._v(" 从 "),s("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("crates.io"),s("OutboundLink")],1),a._v(" 安装")]),a._v(" "),s("p",[a._v("一旦我们拥有了 Nu 所需的依赖项，我们可以通过 Rust 编译器套件提供的 "),s("code",[a._v("cargo")]),a._v(" 命令来安装它：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> cargo install nu\n")])])]),s("p",[a._v("就这样！cargo 将会自动地下载和编译 Nu 与他的依赖，然后将它安装到 cargo bin 路径下，因此我们可以直接运行它。")]),a._v(" "),s("p",[a._v("如果你想要在安装时启用更多的特性，只需要：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> cargo install nu --features=stable\n")])])]),s("p",[a._v("要启用所有可用的特性，最简单的方法是检出 Nu 的源代码，然后自行编译它：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> git clone https://github.com/nushell/nushell.git\n> cd nushell\nnushell> cargo install --path . --force --features=stable\n")])])]),s("p",[a._v("在这个步骤，确保你系统里拥有上述所有依赖：")]),a._v(" "),s("p",[a._v("一旦安装成功，我们可以通过 "),s("code",[a._v("nu")]),a._v(" 命令来运行 Nu：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ nu\n/home/jonathan/Source>\n")])])]),s("h2",{attrs:{id:"从源代码构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从源代码构建"}},[a._v("#")]),a._v(" 从源代码构建")]),a._v(" "),s("p",[a._v("我们也可以从 github 直接下载 Nu 的源代码来构建。这可以让我们立刻接触到 Nu 最新的特性和 BUG 修复。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> git clone https://github.com/nushell/nushell.git\n")])])]),s("p",[a._v("Git 将会为我们克隆 nushell 的主仓库。然后，我们可以使用 "),s("code",[a._v("rustup")]),a._v(" 来构建并运行 Nu：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> cd nushell\nnushell> cargo build --workspace --features=stable && cargo run --features=stable\n")])])]),s("p",[a._v("我们同样可以以 release 模式编译 Nu：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nushell> cargo build --release --workspace --features=stable && cargo run --release --features=stable\n")])])]),s("p",[a._v('熟悉 Rust 的人们应该想知道，为什么我们在能够通过 "run" 直接进行构建并运行的情况下仍使用 "build" 和 "run" 两个步骤。这是为了避免 Cargo 中新的 '),s("code",[a._v("default-run")]),a._v(" 选项的缺点，并且确保所有的插件都构建了，尽管它们可能在未来并没有用到。")]),a._v(" "),s("h2",{attrs:{id:"设为你的登录-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设为你的登录-shell"}},[a._v("#")]),a._v(" 设为你的登录 Shell")]),a._v(" "),s("p",[s("strong",[a._v("!!! Nu 仍然在开发中，对于日常使用可能并不稳定。!!!")])]),a._v(" "),s("p",[a._v("为了设置登录 Shell，你可以使用 "),s("a",{attrs:{href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"}},[s("code",[a._v("chsh")]),s("OutboundLink")],1),a._v(" 命令。\n一些 Linux 发行版在 "),s("code",[a._v("/etc/shells")]),a._v(" 文件内保存可用的 Shell 们，并且不允许改变 Shell 除非 Nu 在这个白名单中。如果你没有更新 "),s("code",[a._v("shells")]),a._v(" 文件，你可能会看到一个类似于以下内容的报错：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chsh: /home/username/.cargo/bin/nu is an invalid shell\n")])])]),s("p",[a._v("你可以将 Nu 的路径添加到 "),s("code",[a._v("shells")]),a._v(" 文件的末尾，绝对路径可以通过 "),s("code",[a._v("which nu")]),a._v(" 来获取，通常为 "),s("code",[a._v("$HOME/.cargo/bin/nu")]),a._v("。")])])}),[],!1,null,null,null);e.default=r.exports}}]);