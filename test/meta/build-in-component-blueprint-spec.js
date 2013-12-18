/* <copyright>
 </copyright> */
/**
 @module montage/data/blueprint-spec.js
 @requires montage/core/core
 @requires montage/core/logger
 */
var Montage = require("montage").Montage;
var Condition = require("montage/ui/condition.reel").Condition;
var Loader = require("montage/ui/loader.reel").Loader;
var Repetition = require("montage/ui/repetition.reel").Repetition;
var Slot = require("montage/ui/slot.reel").Slot;
var Substitution = require("montage/ui/substitution.reel").Substitution;
var Text = require("montage/ui/text.reel").Text;

var Serializer = require("montage/core/serialization").Serializer;

describe("meta/build-in-component-blueprint-spec", function () {

    describe("test condition blueprint", function () {
        it("should exist", function () {
            var blueprintPromise = Condition.blueprint;
            return blueprintPromise.then(function (blueprint) {
                expect(blueprint).toBeTruthy();
              });
        });

    });

    describe("test loader blueprint", function () {
        it("should exist", function () {
            var blueprintPromise = Loader.blueprint;
            return blueprintPromise.then(function (blueprint) {
                expect(blueprint).toBeTruthy();
              });
        });

    });

    describe("test repetition blueprint", function () {
        it("should exist", function () {
            var blueprintPromise = Repetition.blueprint;
            return blueprintPromise.then(function (blueprint) {
                expect(blueprint).toBeTruthy();
              });
        });

    });

    describe("test slot blueprint", function () {
        it("should exist", function () {
            var blueprintPromise = Slot.blueprint;
            return blueprintPromise.then(function (blueprint) {
                expect(blueprint).toBeTruthy();
              });
        });

    });

    describe("test substitution blueprint", function () {
        it("should exist", function () {
            var blueprintPromise = Substitution.blueprint;
            return blueprintPromise.then(function (blueprint) {
                expect(blueprint).toBeTruthy();
              });
        });

        it("should have switchValue property blueprint", function () {
            var blueprintPromise = Substitution.blueprint;
            return blueprintPromise.then(function (blueprint) {
                var propertyBlueprint = blueprint.propertyBlueprintForName("switchValue");
                expect(propertyBlueprint).toBeTruthy();
                expect(propertyBlueprint.valueType).toBe("string");
            });
        });

        it("should have shouldLoadComponentTree property blueprint", function () {
            var blueprintPromise = Substitution.blueprint;
            return blueprintPromise.then(function (blueprint) {
                var propertyBlueprint = blueprint.propertyBlueprintForName("shouldLoadComponentTree");
                expect(propertyBlueprint).toBeTruthy();
                expect(propertyBlueprint.valueType).toBe("boolean");
            });
        });

        it("should have transition property blueprint", function () {
            var blueprintPromise = Substitution.blueprint;
            return blueprintPromise.then(function (blueprint) {
                var propertyBlueprint = blueprint.propertyBlueprintForName("transition");
                expect(propertyBlueprint).toBeTruthy();
                expect(propertyBlueprint.valueType).toBe("object");
            });
        });


    });

    describe("test text blueprint", function () {
        it("should exist", function () {
            var blueprintPromise = Text.blueprint;
            return blueprintPromise.then(function (blueprint) {
                expect(blueprint).toBeTruthy();
            });
        });

        it("should have value property blueprint", function () {
            var blueprintPromise = Text.blueprint;
            return blueprintPromise.then(function (blueprint) {
                var propertyBlueprint = blueprint.propertyBlueprintForName("value");
                expect(propertyBlueprint).toBeTruthy();
                expect(propertyBlueprint.valueType).toBe("string");
            });
        });

        it("should have converter association blueprint", function () {
            var blueprintPromise = Text.blueprint;
            return blueprintPromise.then(function (blueprint) {
                var propertyBlueprint = blueprint.propertyBlueprintForName("converter");
                expect(propertyBlueprint).toBeTruthy();
                expect(propertyBlueprint.isAssociationBlueprint).toBe(true);
                expect(propertyBlueprint.targetBlueprint).toBeTruthy();
            });
        });
    });

});
