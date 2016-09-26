---
title: Native Apps I (Android)
link: http://robinmalfait.com/3de-jaar/semester-I/Native-Apps-I.md
---

[Chamilo](https://chamilo.hogent.be/index.php?application=Chamilo%5CApplication%5CWeblcms&go=CourseViewer&course=22880)

# Intro

- geen thread in thread starten
- extra dingen -> bonus punten

# Examen vragen:

- open source -> vanaf google iets uitbrengt dan pas mogen wij er mee werken/uitbreiden
- Wat is een embedded device
- Nougat vs Marshmallow (vorige transities zijn niet belangrijk)
- Software Stack

## Software Stack

![](https://robinmalfait.com/afbeeldingen/droplr/1wQ2.png)

- **Linux kernel** — Core services (including hardware drivers, process and memory management, security, network, and power management) are handled by a Linux 2.6 kernel. The kernel also provides an abstraction layer between the hardware and the remainder of the stack.
- **Libraries** — Running on top of the kernel, Android includes various C/C++ core libraries such as libc and SSL
- **Android run time (ART)** — The run time is what makes an Android phone an Android phone rather than a mobile Linux implementation. Including the core libraries and the Dalvik VM, the Android run time is the engine that powers your applications and, along with the libraries, forms the basis for the application framework.
- **Core libraries** — Although most Android application development is written using the Java language, Dalvik is not a Java VM. The core Android libraries provide most of the functionality available in the core Java libraries, as well as the Androidspecific libraries.
- **Dalvik VM** — Dalvik is a register-based Virtual Machine that’s been optimized to ensure that a device can run multiple instances efficiently. It relies on the Linux kernel for threading and low-level memory management.
- **Application framework** — The application framework provides the classes used to create Android applications. It also provides a generic abstraction for hardware access and manages the user interface and application resources.
- **Application layer** — All applications, both native and third-party, are built on the application layer by means of the same API libraries. The application layer runs within the Android run time, using the classes and services made available from the application framework.

### Java BASICS
```
   (systeem onafhankelijk)
         
code -> bytecode -> JVM
                     | (interpreteren)
                Machine Code (systeem afhankelijk)
```

### ART vs Dalvik

* ART: alles compileren
    - voordeel: kan veel sneller runner / performanter
    - nadeel: meer geheugen gebruik
* Dalvik: Compileren wat je nodig hebt (JIT - Just In Time)

