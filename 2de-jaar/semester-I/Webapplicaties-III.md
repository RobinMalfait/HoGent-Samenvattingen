---
title: Webapplicaties III
---

# DienstenCheques

## Structuur

Dit is de mappen structuur van het project, enkel de belangrijkste bestanden voor ons staan er in.

### DienstenCheques

```
.
├── App_Start
│   ├── BundleConfig.cs
│   ├── FilterConfig.cs
│   ├── IdentityConfig.cs
│   ├── NinjectWebCommon.cs
│   ├── RouteConfig.cs
│   └── Startup.Auth.cs
├── Content
│   ├── Site.css
│   ├── bootstrap.css
│   └── bootstrap.min.css
├── Controllers
│   ├── AccountController.cs
│   ├── BestellingenController.cs
│   ├── HomeController.cs
│   └── ManageController.cs
├── Global.asax.cs
├── Infrastructure
│   └── GebruikerModelBinder.cs
├── Models
│   ├── AccountViewModels.cs
│   ├── DAL
│   │   ├── DienstenChequesContext.cs
│   │   ├── DienstenChequesInitializer.cs
│   │   ├── GebruikersRepository.cs
│   │   └── Mapper
│   │       ├── BestellingMapper.cs
│   │       ├── DienstenChequeMapper.cs
│   │       ├── GebruikerMapper.cs
│   │       └── PrestatieMapper.cs
│   ├── Domain
│   │   ├── ApplicationUser.cs
│   │   ├── Bestelling.cs
│   │   ├── DienstenCheque.cs
│   │   ├── Gebruiker.cs
│   │   ├── IGebruikersRepository.cs
│   │   ├── Onderneming.cs
│   │   ├── Prestatie.cs
│   │   └── PrestatieType.cs
│   └── ManageViewModels.cs
├── Properties
│   └── AssemblyInfo.cs
├── Scripts
│   ├── Bestellingen.js
│   ├── _references.js
│   ├── bootstrap.js
│   ├── bootstrap.min.js
│   ├── jquery-1.10.2.intellisense.js
│   ├── jquery-1.10.2.js
│   ├── jquery-1.10.2.min.js
│   ├── jquery-1.10.2.min.map
│   ├── jquery.validate-vsdoc.js
│   ├── jquery.validate.js
│   ├── jquery.validate.min.js
│   ├── jquery.validate.unobtrusive.js
│   ├── jquery.validate.unobtrusive.min.js
│   ├── modernizr-2.6.2.js
│   ├── respond.js
│   └── respond.min.js
├── Startup.cs
├── ViewModels
│   └── BestellingenViewModels.cs
├── Views
│   ├── Account
│   │   ├── ConfirmEmail.cshtml
│   │   ├── ExternalLoginConfirmation.cshtml
│   │   ├── ExternalLoginFailure.cshtml
│   │   ├── ForgotPassword.cshtml
│   │   ├── ForgotPasswordConfirmation.cshtml
│   │   ├── Login.cshtml
│   │   ├── Register.cshtml
│   │   ├── ResetPassword.cshtml
│   │   ├── ResetPasswordConfirmation.cshtml
│   │   ├── SendCode.cshtml
│   │   ├── VerifyCode.cshtml
│   │   └── _ExternalLoginsListPartial.cshtml
│   ├── Bestellingen
│   │   ├── Bestelling.cshtml
│   │   ├── Index.cshtml
│   │   └── Nieuw.cshtml
│   ├── Home
│   │   ├── About.cshtml
│   │   ├── Contact.cshtml
│   │   └── Index.cshtml
│   ├── Manage
│   │   ├── AddPhoneNumber.cshtml
│   │   ├── ChangePassword.cshtml
│   │   ├── Index.cshtml
│   │   ├── ManageLogins.cshtml
│   │   ├── SetPassword.cshtml
│   │   └── VerifyPhoneNumber.cshtml
│   ├── Shared
│   │   ├── Error.cshtml
│   │   ├── Lockout.cshtml
│   │   ├── _Layout.cshtml
│   │   └── _LoginPartial.cshtml
│   ├── Web.config
│   └── _ViewStart.cshtml
├── Web.config
└── fonts
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    └── glyphicons-halflings-regular.woff
```

### DienstenCheques.Tests

```
.
├── Controllers
│   ├── BestellingenControllerTest.cs
│   ├── DummyContext.cs
│   └── HomeControllerTest.cs
└── Models
    ├── BestellingTest.cs
    ├── DienstenChequeTest.cs
    └── GebruikerTest.cs
```

## DienstenCheques

## DienstenCheques.Tests

### Controllers

#### BestellingenControllerTest.cs

```cs
using System;
using System.Linq;
using System.Web.Mvc;
using DienstenCheques.Controllers;
using DienstenCheques.Models.Domain;
using DienstenCheques.ViewModels.BestellingenViewModels;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace DienstenCheques.Tests.Controllers {
    [TestClass]
    public class BestellingenControllerTest {
        private BestellingenController controller;
        private Gebruiker jan;
        private Mock<IGebruikersRepository> mockGebruikersRepository;
        private NieuweBestellingViewModel model;
        private NieuweBestellingViewModel modelMetFout;

        [TestInitialize]
        public void SetUpContext() {
            DummyContext context = new DummyContext();
            mockGebruikersRepository = new Mock<IGebruikersRepository>();
            jan = context.Jan;
            controller = new BestellingenController(
                mockGebruikersRepository.Object
            );
            model = new NieuweBestellingViewModel(9.0M) {
                Elektronisch = true,
                AantalCheques = 20,
                DebiteerDatum = DateTime.Today
            };

            modelMetFout = new NieuweBestellingViewModel(9.0M) {
                Elektronisch = true,
                AantalCheques = 70,
                DebiteerDatum = DateTime.Today
            };
        }

        #region "Index"
        [TestMethod]
        public void Index6MaandenRetourneertModel() {
            ViewResult result = controller.Index(jan) as ViewResult;
            BestellingenViewModel bestellingenViewModel = ((BestellingenViewModel) result.Model);

            Assert.AreEqual(1, bestellingenViewModel.AantalBeschikbareCheques);
            Assert.AreEqual(8, bestellingenViewModel.AantalOpenstaandePrestatieUren);
            Assert.AreEqual(1, bestellingenViewModel.Bestellingen.Count());
            Assert.AreEqual(DateTime.Today.AddMonths(-4), bestellingenViewModel.Bestellingen.ToArray()[0].CreatieDatum);
        }

        [TestMethod]
        public void Index12MaandenRetourneertModel() {
            ViewResult result = controller.Index(jan, 12) as ViewResult;
            BestellingenViewModel bestellingenViewModel = ((BestellingenViewModel) result.Model);

            Assert.AreEqual(1, bestellingenViewModel.AantalBeschikbareCheques);
            Assert.AreEqual(8, bestellingenViewModel.AantalOpenstaandePrestatieUren);
            Assert.AreEqual(3, bestellingenViewModel.Bestellingen.Count());
            Assert.AreEqual(DateTime.Today.AddMonths(-12), bestellingenViewModel.Bestellingen.Last().CreatieDatum);
        }
        #endregion

        #region Nieuw
        [TestMethod]
        public void NieuwReturnsNieuweBestellingViewModel() {
            ViewResult result = controller.Nieuw(jan) as ViewResult;
            NieuweBestellingViewModel nieuweBestellingViewModel = result.Model as NieuweBestellingViewModel;

            Assert.AreEqual(20, nieuweBestellingViewModel.AantalCheques);
            Assert.AreEqual(9.0M, nieuweBestellingViewModel.Zichtwaarde);
            Assert.AreEqual(DateTime.Today, nieuweBestellingViewModel.DebiteerDatum);
            Assert.IsTrue(nieuweBestellingViewModel.Elektronisch);
        }
        #endregion

        #region HttpPost Nieuw
        [TestMethod]
        public void NieuwPostReturnsToIndexWhenUpdateSuccessfull() {
            RedirectToRouteResult result = controller.Nieuw(jan, model) as RedirectToRouteResult;

            Assert.AreEqual("Index", result.RouteValues["action"]);
        }

        [TestMethod]
        public void NieuwPostVoegtBestellingToe() {
            int aantal = jan.Bestellingen.Count;
            controller.Nieuw(jan, model);

            Assert.AreEqual(aantal+1, jan.Bestellingen.Count);

            mockGebruikersRepository.Verify(m => m.SaveChanges(), Times.Once());
        }

        [TestMethod]
        public void NieuwPostVoegtBestellingNietToeBijFout() {
            controller.Nieuw(jan, modelMetFout);

            Assert.AreEqual(3, jan.Bestellingen.Count);

            mockGebruikersRepository.Verify(m => m.SaveChanges(), Times.Never);
        }

        [TestMethod]
        public void NieuwPostRetourneertViewBijFout() {
            ViewResult result =  controller.Nieuw(jan, modelMetFout) as ViewResult;
            NieuweBestellingViewModel nieuweBestellingViewModel = ((NieuweBestellingViewModel)result.Model);

            Assert.AreEqual(70, nieuweBestellingViewModel.AantalCheques);
            Assert.AreEqual(DateTime.Today, nieuweBestellingViewModel.DebiteerDatum);
            Assert.AreEqual(true, nieuweBestellingViewModel.Elektronisch);
            Assert.AreEqual(9.0M, nieuweBestellingViewModel.Zichtwaarde);
        }
        #endregion
    }
}

```

#### DummyContext.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DienstenCheques.Models.Domain;

namespace DienstenCheques.Tests.Controllers {
    class DummyContext {
        public Gebruiker Jan { get; set; }
        public Gebruiker An { get; set; }
        public Gebruiker Tine { get; set; }

        public DummyContext() {
            Onderneming onderneming = new Onderneming() { Naam = "Hogeschool Gent" };

            //Nog 2 openstaande prestaties, 1 cheque over
            Jan = new Gebruiker() {
                GebruikersNummer = "1000000000",
                Naam = "Peeters",
                Voornaam = "Jan",
                Email = "jan.peeters@hogent.be"
            };

            for (int i = 12; i >= 0; i--) {
                Prestatie pres = new Prestatie() {
                    AantalUren = 4,
                    DatumPrestatie = DateTime.Today.AddMonths(-i),
                    PrestatieType = PrestatieType.Schoonmaken,
                    Onderneming = onderneming,
                    Betaald = true
                };

                Jan.Prestaties.Add(pres);
            }

            Jan.GetPrestatie(11).Betaald = false;
            Jan.GetPrestatie(12).Betaald = false;

            int p = 0;
            int pi = 0;
            for (int i = 3; i > 0; i--) {
                Bestelling b = new Bestelling() {
                    AantalAangekochteCheques = 15,
                    Elektronisch = true
                };

                b.StelDatumsIn(DateTime.Today.AddMonths(-4 * i), DateTime.Today.AddMonths(-4 * i));
                Jan.Bestellingen.Add(b);

                for (int j = 1; j <= 15; j++) {
                    DienstenCheque d = new DienstenCheque(true, DateTime.Today.AddMonths(-4 * i));
                    if (p < 11) {
                        d.Prestatie = Jan.GetPrestatie(p);
                        d.GebruiksDatum = d.Prestatie.DatumPrestatie;
                    }

                    Jan.Portefeuille.Add(d);

                    if (pi < 3) {
                        pi++;
                    } else {
                        pi = 0;
                        p++;
                    }
                }
            }

            //alle cheques zijn toegewezen aan prestaties, geen openstaande prestaties meer
            An = new Gebruiker() {
                GebruikersNummer = "1000000001",
                Naam = "Pieters",
                Voornaam = "An",
                Email = "an.pieters@hogent.be"
            };

            Bestelling anBestelling = new Bestelling() { AantalAangekochteCheques = 20, Elektronisch = true };
            anBestelling.StelDatumsIn(DateTime.Today.AddMonths(-1), DateTime.Today.AddMonths(-1));
            An.Bestellingen.Add(anBestelling);

            for (int i = 4; i > 0; i--) {
                An.Prestaties.Add(new Prestatie() {
                    AantalUren = 5,
                    DatumPrestatie = DateTime.Today.AddMonths(-i),
                    PrestatieType = PrestatieType.Schoonmaken,
                    Onderneming = onderneming,
                    Betaald = true
                });
            }

            for (int j = 0; j <= 19; j++) {
                DienstenCheque d = new DienstenCheque(true, DateTime.Today.AddMonths(-1));
                d.Prestatie = An.GetPrestatie(j / 5);
                d.GebruiksDatum = d.Prestatie.DatumPrestatie;
                An.Portefeuille.Add(d);
            }

            //nog 2 cheques niet gebruikt, geen openstaande prestaties
            Tine = new Gebruiker() {
                GebruikersNummer = "1000000002",
                Naam = "Pieters",
                Voornaam = "Tine",
                Email = "tine.pieters@hogent.be"
            };

            Bestelling tineBestelling = new Bestelling() { AantalAangekochteCheques = 6, Elektronisch = true };
            tineBestelling.StelDatumsIn(DateTime.Today.AddMonths(-1), DateTime.Today.AddMonths(-1));
            Tine.Bestellingen.Add(tineBestelling);
            Tine.Prestaties.Add(new Prestatie() {
                AantalUren = 4,
                DatumPrestatie = DateTime.Today.AddDays(-10),
                PrestatieType = PrestatieType.Schoonmaken,
                Onderneming = onderneming,
                Betaald = true
            });

            for (int j = 1; j <= 6; j++) {
                DienstenCheque d = new DienstenCheque(true, DateTime.Today.AddMonths(-1));

                if (j < 5) {
                    d.Prestatie = Tine.GetPrestatie(0);
                    d.GebruiksDatum = d.Prestatie.DatumPrestatie;
                }

                Tine.Portefeuille.Add(d);
            }

        }
    }
}

```

#### HomeControllerTest.cs

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using DienstenCheques;
using DienstenCheques.Controllers;

namespace DienstenCheques.Tests.Controllers {
    [TestClass]
    public class HomeControllerTest {
        [TestMethod]
        public void Index() {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void About() {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.About() as ViewResult;

            // Assert
            Assert.AreEqual("Your application description page.", result.ViewBag.Message);
        }

        [TestMethod]
        public void Contact() {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Contact() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
        }
    }
}
```

### Models

#### BestellingTest.cs

```cs
using System;
using DienstenCheques.Models.Domain;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DienstenCheques.Tests.Models {
    [TestClass]
    public class BestellingTest {
        [TestMethod]
        public void BestellingAanmakenSlaagt() {
            Bestelling b = new Bestelling(10, true, DateTime.Today);
            Assert.AreEqual(10, b.AantalAangekochteCheques);
            Assert.IsTrue(b.Elektronisch);
            Assert.AreEqual(DateTime.Today, b.CreatieDatum);
        }

        [ExpectedException(typeof(ArgumentException))]
        [TestMethod]
        public void BestellingAanmakenAantalFoutief() {
            Bestelling b = new Bestelling(70, true, DateTime.Today);
        }

        [ExpectedException(typeof(ArgumentException))]
        [TestMethod]
        public void BestellingAanmakenDebiteerDatumFoutief() {
            Bestelling b = new Bestelling(-10, true, DateTime.Today.AddMonths(2));
        }

        [TestMethod]
        public void TotaalBedrag() {
            Bestelling b = new Bestelling(10, true, DateTime.Today);
            Assert.AreEqual(90, b.TotaalBedrag);
        }
    }
}
```

#### DienstenChequeTest.cs

```cs
using System;
using DienstenCheques.Models.Domain;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DienstenCheques.Tests.Models {
    [TestClass]
    public class DienstenChequeTest {
        [TestMethod]
        public void DienstenChequeAanmakenSlaagt() {
            DienstenCheque dc = new DienstenCheque(true);

            Assert.IsTrue(dc.Elektronisch);
            Assert.AreEqual(DateTime.Today, dc.CreatieDatum);
            Assert.IsNull(dc.Prestatie);
            Assert.IsNull(dc.GebruiksDatum);
        }

    }
}
```

#### GebruikerTest.cs

```cs
using System;
using DienstenCheques.Tests.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DienstenCheques.Tests.Models {
    [TestClass]
    public class GebruikerTest {
        DummyContext context;

        [TestInitialize]
        public void Initialize() {
            context = new DummyContext();
        }

        [TestMethod]
        public void AddBestellingVoegtBestellingToe() {
            context.Jan.AddBestelling(20, true, DateTime.Today);
            Assert.AreEqual(4, context.Jan.Bestellingen.Count);
        }

        [TestMethod]
        public void AddBestellingVoegtDienstenChequesToeAanPortefeuille() {
            int aantal = context.Jan.Portefeuille.Count;
            context.Jan.AddBestelling(20, true, DateTime.Today);
            Assert.AreEqual(aantal+20,context.Jan.Portefeuille.Count);
        }

        [TestMethod]
        public void AddBestellingPastOpenstaandePrestatiesAan() {
            context.Jan.AddBestelling(20, true, DateTime.Today);
            Assert.AreEqual(0, context.Jan.AantalOpenstaandePrestatieUren);
        }

        [TestMethod]
        public void AddBestellingPastBeschikbareDienstenChequesAan() {
            context.Jan.AddBestelling(20, true, DateTime.Today);
            Assert.AreEqual(13, context.Jan.AantalBeschikbareElektronischeCheques);
        }
    }
}
```