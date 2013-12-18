/* <copyright>
 </copyright> */
var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;
var Component = require("montage/ui/component").Component;
var Selector = require("montage/core/selector").Selector;
var Blueprint = require("montage/core/meta/blueprint").Blueprint;
var Promise = require("montage/core/promise").Promise;
var Serializer = require("montage/core/serialization").Serializer;

TestPageLoader.queueTest("component-blueprint-test/component-blueprint-test", function (testPage) {
    describe("meta/component-blueprint-spec", function () {
        var Component1;
        var Component2;
        var Component3;


        beforeEach(function () {
            debugger
            Component1 = Component.specialize();
            Component2 = Component.specialize();
            Component3 = Component.specialize();
        });

        it("can create new blueprint", function () {
            var newBlueprint = new Blueprint().initWithName(Component1.identifier);
            Component1.blueprint = newBlueprint;
            var blueprintPromise = Component1.blueprint;
            return blueprintPromise.then(function (blueprint) {
                expect(newBlueprint).toBeDefined();
                expect(blueprint).toBe(newBlueprint);
            });
        });

        it("can create new property blueprint", function () {
            var newBlueprint = new Blueprint().initWithName(Component1.identifier);
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty");
            Component1.blueprint = newBlueprint;
            var blueprintPromise = Component1.blueprint;
            return blueprintPromise.then(function (blueprint) {
                var propertyBlueprint = blueprint.propertyBlueprintForName("bindableProperty");
                expect(propertyBlueprint).toBeDefined();
            });
        });

        it("can serialize the component blueprint", function () {
            var serializer = new Serializer().initWithRequire(require);

            var newBlueprint = new Blueprint().initWithName(Component1.identifier);
            //
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty1");
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty2");
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty3");
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty4");
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty5");
            //
            newBlueprint.addEventBlueprintNamed("action");
            //
            newBlueprint.addPropertyBlueprintToGroupNamed(newBlueprint.addToOnePropertyBlueprintNamed("requiredBindableProperty1"), "required");
            newBlueprint.addPropertyBlueprintToGroupNamed(newBlueprint.addToOnePropertyBlueprintNamed("requiredBindableProperty2"), "required");
            newBlueprint.addPropertyBlueprintToGroupNamed(newBlueprint.addToOnePropertyBlueprintNamed("requiredBindableProperty3"), "required");
            debugger
            Component1.blueprint = newBlueprint;

            var blueprintPromise = Component1.blueprint;
            return blueprintPromise.then(function (blueprint) {
                var serializedDescription = serializer.serializeObject(blueprint);
                expect(serializedDescription).toBeTruthy();
            });
        });

        it("can load the component blueprint from the reel", function () {
            var blueprintPromise = Component2.blueprint;
            return blueprintPromise.then(function (blueprint) {
                expect(blueprint).toBeTruthy();
                expect(blueprint.propertyBlueprintForName("bindableProperty1")).toBeTruthy();
                expect(blueprint.propertyBlueprintGroupForName("required")).toBeTruthy();
            });
        });


        it("can create validation rules", function () {
            var serializer = new Serializer().initWithRequire(require);

            var newBlueprint = new Blueprint().initWithName(Component3.identifier);
            expect(newBlueprint).toBeTruthy();
            //
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty1");
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty2");
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty3");
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty4");
            newBlueprint.addToOnePropertyBlueprintNamed("bindableProperty5");
            //
            newBlueprint.addPropertyBlueprintToGroupNamed(newBlueprint.addToOnePropertyBlueprintNamed("requiredBindableProperty1"), "required");
            newBlueprint.addPropertyBlueprintToGroupNamed(newBlueprint.addToOnePropertyBlueprintNamed("requiredBindableProperty2"), "required");
            newBlueprint.addPropertyBlueprintToGroupNamed(newBlueprint.addToOnePropertyBlueprintNamed("requiredBindableProperty3"), "required");

            newBlueprint.addPropertyValidationRule("rule1").validationSelector = null;
            //            newBlueprint.addPropertyValidationRule("rule1").validationSelector = Selector.property("requiredBindableProperty1").isBound;
            //            newBlueprint.addPropertyValidationRule("rule2").validationSelector = Selector.property("requiredBindableProperty2").isBound;
            //            newBlueprint.addPropertyValidationRule("rule3").validationSelector = Selector.property("requiredBindableProperty3").isBound;

            Component3.blueprint = newBlueprint;

            var blueprintPromise = Component3.blueprint;
            return blueprintPromise.then(function (blueprint) {
                expect(blueprint).toBeTruthy();
                var serializedDescription = serializer.serializeObject(blueprint);
                expect(serializedDescription).toBeTruthy();
            });
        });


        describe("test converter blueprint", function () {

            it("should exist", function () {
                var blueprintPromise = Component.blueprint;
                return blueprintPromise.then(function (blueprint) {
                    expect(blueprint).toBeTruthy();
                });
            });

            it("should have element property blueprint", function () {
                var blueprintPromise = Component.blueprint;

                return blueprintPromise.then(function (blueprint) {
                    debugger
                    var propertyBlueprint = blueprint.propertyBlueprintForName("element");
                    expect(propertyBlueprint).toBeTruthy();
                    expect(propertyBlueprint.valueType).toBe("string");
                    expect(propertyBlueprint.readOnly).toBe(true);
                });
            });

            it("should have identifier property blueprint", function () {
                var blueprintPromise = Component.blueprint;
                return blueprintPromise.then(function (blueprint) {
                    var propertyBlueprint = blueprint.propertyBlueprintForName("identifier");
                    expect(propertyBlueprint).toBeTruthy();
                    expect(propertyBlueprint.valueType).toBe("string");
                });
            });

        });

    });

});
