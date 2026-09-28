'use client'
import { signIn } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";

const SignIn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());

        const { data: resData, error } = await signIn.email({
            email: formValues.email as string,
            password: formValues.password as string,
            rememberMe: true,
            callbackURL: "/"
        })
        console.log(resData, error)
    };

    return (
        <div className="container max-w-150 mx-auto">
            <h1 className="text-3xl font-bold text-center mt-20">Please Sign in</h1>
            <div className="mt-5">
                <Form className="flex w-76 flex-col gap-4 mx-auto" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                            placeholder="Enter your password"
                                className="w-full max-w-[280px]"
                                type={isVisible ? "text" : "password"}
                            />
                            <InputGroup.Suffix className="pe-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;