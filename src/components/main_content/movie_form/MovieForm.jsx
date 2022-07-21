import { Form, Input, Select, Upload, Button } from 'antd';
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createMovie } from '../../../store/movie_create';

const MovieForm = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(createMovie(values));
  };

  const onReset = () => {
    form.resetFields();
  };
  const { TextArea } = Input;

  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
    >
      <Form.Item
        label="Title"
        name="Title"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Year"
        name="Year"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Poster
            </div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item
        label="Rated"
        name="Rated"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input placeholder="G/PG/PG-13/R/NC-17" />
      </Form.Item>
      <Form.Item
        label="Released"
        name="Released"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Type"
        name="Type"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Select>
          <Select.Option value="movie">movie</Select.Option>
          <Select.Option value="series">series</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="imdbRating"
        name="imdbRating"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Awards"
        name="Awards"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Country"
        name="Country"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Genre"
        name="Genre"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Director"
        name="Director"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Writer"
        name="Writer"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Actors"
        name="Actors"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Runtime"
        name="Runtime"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <Input placeholder="(min)" />
      </Form.Item>
      <Form.Item
        label="Plot"
        name="Plot"
        rules={[
          {
            required: true,
            message: 'Missing area',
          },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Stills
            </div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 100 }}>
          Save
        </Button>
        <Button htmlType="button" onClick={onReset} style={{ marginLeft: 20 }}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MovieForm;
