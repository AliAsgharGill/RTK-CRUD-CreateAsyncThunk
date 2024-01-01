import { Button, Checkbox, Form, Input, Radio } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const MyFrom = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
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
      <Input.Password />
    </Form.Item>
    <Form.Item
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
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
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
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default MyFrom;
