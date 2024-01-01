import { Button, Checkbox, Form, Input, Radio } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const MyFrom = () => (
  <div className="h-screen flex justify-center items-center ">
    <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      className="border rounded-lg red w-[370px] bg-slate-300 p-3 space-y-4 text-left"
      wrapperCol={{
        span: 14,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: "Please input your Age!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        className="text-left"
        label="Gender"
        name="gender"
        rules={[
          {
            required: true,
            message: "Please choose your gender!",
          },
        ]}
      >
        <Radio.Group>
          <Radio value={"male"}>Male</Radio>
          <Radio value={"2"}>Female</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 6,
        }}
      >
        <Button type="primary" htmlType="submit" className="bg-blue-700">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default MyFrom;
