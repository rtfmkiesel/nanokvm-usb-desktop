# NanoKVM-USB Desktop

A desktop application to use [Sipeed](https://sipeed.com/)'s [NanoKVM USB](https://wiki.sipeed.com/hardware/en/kvm/NanoKVM_USB/introduction.html) offline.

## Download

See the [releases](https://github.com/rtfmkiesel/nanokvm-usb-desktop/releases) section. 

**Please note: I'm not an Apple user, those builds are untested. Open a GitHub issue if you encounter anything.**

## Why

As [Sipeed](https://sipeed.com/) only provides a [ZIP file](https://cdn.sipeed.com/nanokvm/NanoKVM-USB.zip) to use the [NanoKVM USB](https://wiki.sipeed.com/hardware/en/kvm/NanoKVM_USB/introduction.html) offline, this repo contains code for an Electron app, which bundles those files for a nice Desktop experience.

## But Electron...

Yes, I'm with you on that. I would have liked to use [Wails](https://wails.io/), [Electrobun](https://www.electrobun.dev/), or [Tauri](https://v2.tauri.app/). But all of do not have a quick and easy way to access WebSerial, which is needed for the keyboard and mouse. I haven't invested too much time tho...

## Todo's

+ GitHub action to check for new ZIP's (checksum compare?) and automatically update the repo

## License

I really don't care what you do with this. It was hacked-together in like 1h. See [LICENSE](LICENSE).

The name and logo for Sipeed belong to [Sipeed](https://sipeed.com/).  
The NanoKVM name belongs to [Sipeed](https://sipeed.com/).  

This repo is not affiliated with Sipeed.  