import { Form, Input, Select, Upload, Button, InputNumber } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createMovie } from '../../../store/movie_create';

const MovieForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [poster, setPoster] = useState();
  const [stills, setStills] = useState([]);

  const onFinish = (values) => {
    console.log(values);
    return dispatch(
      createMovie({
        ...values,
        Genre: values.Genre.join(),
        Runtime: values.Runtime + ' min',
        Poster: poster,
        Images: stills,
      })
    );
  };
  const onReset = () => {
    form.resetFields();
  };
  const { TextArea } = Input;
  const { Option } = Select;

  const handlePosterChange = (event) => {
    if (event.file.status === 'done') {
      setPoster(event.fileList[0].response);
    }
  };

  const handleStillsChange = (event) => {
    if (event.file.status === 'done') {
      setStills(event.fileList.map((file) => file.response));
    }
  };

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
      <Form.Item label="Poster" name="Poster" valuePropName="fileList">
        <p style={{ marginTop: 5 }}>please upload one picture</p>
        <Upload
          action="http://localhost:5000/api/upload"
          listType="picture-card"
          onChange={handlePosterChange}
          accept="image/*"
          maxCount={1}
        >
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
        <Select>
          <Select.Option value="G">G: General Audiences</Select.Option>
          <Select.Option value="PG">
            PG: Parental Guidance Suggested
          </Select.Option>
          <Select.Option value="PG-13">
            PG-13: Parents Strongly Cautioned
          </Select.Option>
          <Select.Option value="R">R: Restricted</Select.Option>
          <Select.Option value="NC-17">NC-17: Clearly Adult</Select.Option>
          <Select.Option value="TV-Y">TV-Y: All Children</Select.Option>
          <Select.Option value="TV-Y7">
            TV-Y7: Directed to Older Children
          </Select.Option>
          <Select.Option value="TV-Y7 FV">
            TV-Y7 FV: Directed to Older Children - Fantasy Violence
          </Select.Option>
          <Select.Option value="TV-G">TV-G: General Audience</Select.Option>
          <Select.Option value="TV-PG">
            TV-PG: Parental Guidance Suggested
          </Select.Option>
          <Select.Option value="TV-14">
            TV-14: Parents Strongly Cautioned
          </Select.Option>
          <Select.Option value="TV-MA">
            TV-MA: Mature Audience Only
          </Select.Option>
        </Select>
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
        name="Genre"
        label="Genre"
        rules={[
          {
            required: true,
            message: 'Missing area',
            type: 'array',
            maxTagCount: 'responsive',
          },
        ]}
      >
        <Select
          mode="multiple"
          placeholder="Please select genre"
          maxTagCount="responsive"
        >
          <Option value="Drama">Drama</Option>
          <Option value="Comedy">Comedy</Option>
          <Option value="Action">Action</Option>
          <Option value="Fantasy">Fantasy</Option>
          <Option value="Horror">Horror</Option>
          <Option value="Romance">Romance</Option>
          <Option value="Western">Western</Option>
          <Option value="Thriller">Thriller</Option>
          <Option value="Sci-Fi">Sci-Fi</Option>
          <Option value="Crime">Crime</Option>
          <Option value="Musicals">Musicals</Option>
          <Option value="Melodramas">Melodramas</Option>
          <Option value="Sports">Sports</Option>
          <Option value="War">War</Option>
        </Select>
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
        <InputNumber
          defaultValue={100}
          min={20}
          max={400}
          formatter={(value) => `${value} min`}
        />
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
        <TextArea
          showCount
          maxLength={250}
          rows={4}
          placeholder="Please describe the main plot of the film in two to four sentences."
        />
      </Form.Item>
      <Form.Item label="Stills" name="Stills" valuePropName="fileList">
        <p style={{ marginTop: 5 }}>please upload three - six picture</p>
        <Upload
          action="http://localhost:5000/api/upload"
          listType="picture-card"
          accept="image/*"
          maxCount={6}
          onChange={handleStillsChange}
        >
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
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginLeft: 100, marginTop: 20 }}
        >
          Save
        </Button>
        <Button
          htmlType="button"
          onClick={onReset}
          style={{ marginLeft: 10, marginTop: 20 }}
        >
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MovieForm;
